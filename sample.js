const video = [
  "xjPi6IcSH_Q",
  "mjjksztJKbw",
  "b117a8_jALE",
  "wgVOgGLtPtc",
  "1dTEXh4lxfA",
  "QA1U1wcieFI",
  "EOWDSnL9ERg",
  "f3kKoo0G7v8",
  "evl_g3Z4nAI",
  "lgUDuZS9MVQ",
  "li7E48NmPwA",
];
const randomVideo = () => {
  let url = video[Math.ceil(Math.random() * 10)];
  return url;
};

const courses = [
  {
    title: "Ultra Instinct",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://www.layups.com/wp-content/uploads/2010/03/Skill-Expectations-on-an-Average-Guard.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Drible",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://www.sports-fitness.co.uk/media/wysiwyg/sports-fitness-images/basketball-skill-drills-for-kids-cone-dribbling.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Point Guard",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image: "https://coachad.com/wp-content/uploads/PointGuard2.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "CrossOver",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqVKVszCg3Qye1Hzr-yuyhA9dgerxySyeLUg&usqp=CAU",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Lay Up",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAzFLqyEw4PxwfeViZnDDbENplXTD-BrsqCw&usqp=CAU",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Dunk",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://www.chicagotribune.com/resizer/IRiwnvLemUN9333e_PUZ2FQgkRM=/1400x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/SNHQEPULUBDURFT7YORCQ6HVXE.JPG",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Mental Prep",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://simplifaster.com/wp-content/uploads/2017/08/Basketball-Combine-Case-Study.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Game Theory",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://image.freepik.com/free-vector/soccer-play-tactics-strategy-drawn-chalk-board_97886-169.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Godly Handling",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://mk0basketballhq3nk0m.kinstacdn.com/wp-content/uploads/2017/02/jw-hs-2dribble.jpg",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
  {
    title: "Mobility Training",
    description: "Gain the skill of Ultra Instinct",
    price: 19.99,
    image:
      "https://www.usab.com/~/media/dd6af414f06342b0a6994ae85df92878.ashx?h=600&la=en&w=800",
    units: [
      {
        title: "unit 1 : Basic movement",
        content:
          "adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem adfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 2 : Stamina Exc",
        content:
          "theadsadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpeadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoem owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasdfas fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 3 : Building Speed",
        content:
          "theadsfasadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemdfas fasdfa dadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 4 : Advance Tech",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 5 : Advance Tech 15",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 6 : Advance Tech 12",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 7 : Advance Tech 55",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 8 : Advance fly",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 9 : Stamina ",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
      {
        title: "unit 10 : Endurance",
        content:
          "theadsfasdfaadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf laadfsadf i sdafasdfas dfas dmf sadfmsamdf mas dfmasdmfams fm asdmf asmdf masd fmasd fmasdkf msdakf mkdasf masklfm aslkf aslkdf malksdmf laksdfmalskdfm laskdmf lakdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoemkdfm askldfmeipwpqpwpeoqwoe owqpe owqe pqoraidsofiapsdofasodfksadofksadkf asldkf sa;dlfkas fpqwoekwqp eo kasdpoadsfk asdfpqwoek pawefokfadskfa;weofkqpwokeopqw ekdsapfokqwpwoekadfqpwoeijadifomqowiempqwoems fasdfa dfasf adsf adsfa sf asdf as df",
        unitVideo: randomVideo(),
      },
    ],
  },
];

module.exports = { courses };
