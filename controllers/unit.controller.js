const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../src/helpers/utils.helper");
const Unit = require("../src/models/unit");

const unitController = {};

unitController.createNew = catchAsync(async (req, res, next) => {
  const author = req.userId;
  //   console.log("author", author);
  const { title, content } = req.body;

  const unit = await Unit.create({
    title,
    content,
    author,
  });

  return sendResponse(res, 200, true, unit, null, "Create new blog successful");
});

//Read all
unitController.listUnits = catchAsync(async (req, res, next) => {
  let { page, limit, sortBy, ...filter } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  const totalUnits = await Unit.countDocuments({
    ...filter,
  });
  const totalPages = Math.ceil(totalUnits / limit);
  const offset = limit * (page - 1);
  const units = await Unit.find(filter)
    .sort({ ...sortBy, createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .populate("author");
  return sendResponse(res, 200, true, { units, totalPages }, null, "");
});
unitController.getSingleUnit = catchAsync(async (req, res, next) => {
  console.log("unit", req.params.id);
  let unit = await Unit.findById(req.params.id);

  if (!unit)
    return next(
      new AppError(404, "Unit not found", "Get single unit by that id error")
    );
  unit = unit.toJSON();
  return sendResponse(res, 200, true, unit, null, null);
});
//update single unit
unitController.updateSingleUnit = catchAsync(async (req, res, next) => {
  const unitId = req.params.id;
  const { title, content } = req.body;
  const unit = await Unit.findOneAndUpdate(
    { _id: unitId },
    { title, content },
    { new: true }
  );
  if (!unit)
    return next(
      new AppError(
        404,
        "Unit not found or User not authorized",
        "Update unit error"
      )
    );
  return sendResponse(res, 200, true, unit, null, "Update course successful");
});

//delete
unitController.deleteSingleUnit = catchAsync(async (req, res, next) => {
  const unitId = req.params.id;
  const unit = await Unit.findOneAndUpdate(
    { _id: unitId },
    { isDeleted: true },
    { new: true }
  );
  if (!unit)
    return next(
      new AppError(
        400,
        "Unit not found or User not authorized",
        "Delete unit success"
      )
    );
  return sendResponse(
    res,
    200,
    true,
    null,
    null,
    `Delete unit ${unit.title} successful`
  );
});
module.exports = unitController;
