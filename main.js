/******************** 0. Samples ********************/
// The following data are examplar samples for RF classifier. Copy this section
// into the code editor and click import upon suggestion. Skip to section 1 if
// you are taking your own samples and refer to readme.md for examples.
 var water = /* color: #28d6ca */ee.FeatureCollection(
         [ee.Feature(
             ee.Geometry.Point([-72.52276817469257, 41.42719445869393]),
             {
               "landcover": 1,
               "system:index": "0"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.45427528528828, 41.4365896966724]),
             {
               "landcover": 1,
               "system:index": "1"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47418800501484, 41.467597197141494]),
             {
               "landcover": 1,
               "system:index": "2"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.43350425867695, 41.469912515190344]),
             {
               "landcover": 1,
               "system:index": "3"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.46320167688984, 41.42114475031419]),
             {
               "landcover": 1,
               "system:index": "4"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49985793163401, 41.47843402163249]),
             {
               "landcover": 1,
               "system:index": "5"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.485266714593, 41.472903573965226]),
             {
               "landcover": 1,
               "system:index": "6"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4775419526301, 41.47727652512147]),
             {
               "landcover": 1,
               "system:index": "7"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.40767577221018, 41.5006796588473]),
             {
               "landcover": 1,
               "system:index": "8"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.41093733837229, 41.49167945405287]),
             {
               "landcover": 1,
               "system:index": "9"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.43462660839182, 41.46853032778965]),
             {
               "landcover": 1,
               "system:index": "10"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.53481610976475, 41.36665075607043]),
             {
               "landcover": 1,
               "system:index": "11"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49893888198154, 41.40232719861659]),
             {
               "landcover": 1,
               "system:index": "12"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4694131251456, 41.372447899678264]),
             {
               "landcover": 1,
               "system:index": "13"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.5840829249503, 41.35801849627874]),
             {
               "landcover": 1,
               "system:index": "14"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.5734399195792, 41.34770982055125]),
             {
               "landcover": 1,
               "system:index": "15"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52973869478525, 41.29632496222005]),
             {
               "landcover": 1,
               "system:index": "16"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50744378636034, 41.356171792817854]),
             {
               "landcover": 1,
               "system:index": "17"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48941934178026, 41.33954777548184]),
             {
               "landcover": 1,
               "system:index": "18"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52954273227031, 41.55617912898418]),
             {
               "landcover": 1,
               "system:index": "19"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56421833041485, 41.576215030370356]),
             {
               "landcover": 1,
               "system:index": "20"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.68129138949688, 41.50863323876495]),
             {
               "landcover": 1,
               "system:index": "21"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.72146015170391, 41.54538799326465]),
             {
               "landcover": 1,
               "system:index": "22"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.63236348785881, 41.47778646301756]),
             {
               "landcover": 1,
               "system:index": "23"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.63322179474358, 41.47714340552741]),
             {
               "landcover": 1,
               "system:index": "24"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.62216273869186, 41.444091480579154]),
             {
               "landcover": 1,
               "system:index": "25"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56216708744674, 41.46036716805697]),
             {
               "landcover": 1,
               "system:index": "26"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3297263102256, 41.522033832125935]),
             {
               "landcover": 1,
               "system:index": "27"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.33049878642188, 41.52049153752875]),
             {
               "landcover": 1,
               "system:index": "28"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.32637891337501, 41.51849935260531]),
             {
               "landcover": 1,
               "system:index": "29"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38654622599708, 41.5000526640889]),
             {
               "landcover": 1,
               "system:index": "30"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55174164695852, 41.53517835142964]),
             {
               "landcover": 1,
               "system:index": "31"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55431656761282, 41.549825340171495]),
             {
               "landcover": 1,
               "system:index": "32"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.61456971092336, 41.56305616998437]),
             {
               "landcover": 1,
               "system:index": "33"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55294327659719, 41.510116601053326]),
             {
               "landcover": 1,
               "system:index": "34"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.6432023441046, 41.58505409241607]),
             {
               "landcover": 1,
               "system:index": "35"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.63976911656553, 41.589868829461935]),
             {
               "landcover": 1,
               "system:index": "36"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.64603475682432, 41.564571399529854]),
             {
               "landcover": 1,
               "system:index": "37"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50800529067115, 41.59876395446008]),
             {
               "landcover": 1,
               "system:index": "38"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50663199965553, 41.595041102340524]),
             {
               "landcover": 1,
               "system:index": "39"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.5012246662815, 41.5886218874962]),
             {
               "landcover": 1,
               "system:index": "40"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44440475051002, 41.2593673801289]),
             {
               "landcover": 1,
               "system:index": "41"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48491683547095, 41.24981747413103]),
             {
               "landcover": 1,
               "system:index": "42"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50688949172095, 41.25033372096007]),
             {
               "landcover": 1,
               "system:index": "43"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.41144576613502, 41.25084996370985]),
             {
               "landcover": 1,
               "system:index": "44"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.37127700392799, 41.2449129258037]),
             {
               "landcover": 1,
               "system:index": "45"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.34587112013892, 41.25343111626943]),
             {
               "landcover": 1,
               "system:index": "46"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.33797469679908, 41.268399789971475]),
             {
               "landcover": 1,
               "system:index": "47"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38363662306861, 41.34351994143891]),
             {
               "landcover": 1,
               "system:index": "48"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38749900405006, 41.36117368880176]),
             {
               "landcover": 1,
               "system:index": "49"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38089004103736, 41.355311113892085]),
             {
               "landcover": 1,
               "system:index": "50"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.42925167580569, 41.35018845819682]),
             {
               "landcover": 1,
               "system:index": "51"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38101482888186, 41.37598830846392]),
             {
               "landcover": 1,
               "system:index": "52"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.61658605297993, 41.61327420670076]),
             {
               "landcover": 1,
               "system:index": "53"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56843503674457, 41.61635433256342]),
             {
               "landcover": 1,
               "system:index": "54"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56989415844868, 41.60255678940055]),
             {
               "landcover": 1,
               "system:index": "55"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.73042716168065, 41.515590924272885]),
             {
               "landcover": 1,
               "system:index": "56"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.74372878001161, 41.525163065571405]),
             {
               "landcover": 1,
               "system:index": "57"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.60102475053563, 41.40425128269059]),
             {
               "landcover": 1,
               "system:index": "58"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56899663494991, 41.421115159875136]),
             {
               "landcover": 1,
               "system:index": "59"
             })]),
     forest = /* color: #49de13 */ee.FeatureCollection(
         [ee.Feature(
             ee.Geometry.Point([-72.46464077406503, 41.42527349850621]),
             {
               "landcover": 2,
               "system:index": "0"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55481015496802, 41.414446998120056]),
             {
               "landcover": 2,
               "system:index": "1"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55178327592371, 41.41681451766959]),
             {
               "landcover": 2,
               "system:index": "2"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.53987566860576, 41.42180650167524]),
             {
               "landcover": 2,
               "system:index": "3"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.374662832192, 41.305281174661424]),
             {
               "landcover": 2,
               "system:index": "4"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4352325730978, 41.287133705652224]),
             {
               "landcover": 2,
               "system:index": "5"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56119915526996, 41.30055057103141]),
             {
               "landcover": 2,
               "system:index": "6"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52679740719512, 41.3380313400245]),
             {
               "landcover": 2,
               "system:index": "7"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52582571966532, 41.33803717991782]),
             {
               "landcover": 2,
               "system:index": "8"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52631216838198, 41.33896438475298]),
             {
               "landcover": 2,
               "system:index": "9"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.52593722523937, 41.33453888988157]),
             {
               "landcover": 2,
               "system:index": "10"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.62225593199693, 41.42374080274936]),
             {
               "landcover": 2,
               "system:index": "11"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.73411969576291, 41.42947196328618]),
             {
               "landcover": 2,
               "system:index": "12"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.69953498335296, 41.48569809321682]),
             {
               "landcover": 2,
               "system:index": "13"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.69459971876556, 41.48519978505907]),
             {
               "landcover": 2,
               "system:index": "14"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.69880091268405, 41.61794580064311]),
             {
               "landcover": 2,
               "system:index": "15"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.71082504812208, 41.6225329420754]),
             {
               "landcover": 2,
               "system:index": "16"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.69625528875318, 41.62827515039838]),
             {
               "landcover": 2,
               "system:index": "17"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.63508690627826, 41.62123922431133]),
             {
               "landcover": 2,
               "system:index": "18"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.63158930572284, 41.62407836997497]),
             {
               "landcover": 2,
               "system:index": "19"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.6436485174538, 41.61828766353126]),
             {
               "landcover": 2,
               "system:index": "20"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.61968805714746, 41.63215539041305]),
             {
               "landcover": 2,
               "system:index": "21"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.62629702016015, 41.632187466421904]),
             {
               "landcover": 2,
               "system:index": "22"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.66084331785218, 41.631071005642625]),
             {
               "landcover": 2,
               "system:index": "23"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.66734499250428, 41.62749437038235]),
             {
               "landcover": 2,
               "system:index": "24"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55240741981537, 41.641069281289006]),
             {
               "landcover": 2,
               "system:index": "25"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.57624426657695, 41.63263670317015]),
             {
               "landcover": 2,
               "system:index": "26"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56527403170604, 41.62551162535022]),
             {
               "landcover": 2,
               "system:index": "27"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55622859920611, 41.626427184619594]),
             {
               "landcover": 2,
               "system:index": "28"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.55825098480334, 41.625204166212406]),
             {
               "landcover": 2,
               "system:index": "29"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.550560469758, 41.57588844790887]),
             {
               "landcover": 2,
               "system:index": "30"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.53014381019389, 41.566370628263265]),
             {
               "landcover": 2,
               "system:index": "31"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.462204902648, 41.54049451755154]),
             {
               "landcover": 2,
               "system:index": "32"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4593778543463, 41.54002473764051]),
             {
               "landcover": 2,
               "system:index": "33"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.45213547510815, 41.54679858033533]),
             {
               "landcover": 2,
               "system:index": "34"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38675685284191, 41.436666654061725]),
             {
               "landcover": 2,
               "system:index": "35"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.46527242684671, 41.418043270768706]),
             {
               "landcover": 2,
               "system:index": "36"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44250221932136, 41.31525498045652]),
             {
               "landcover": 2,
               "system:index": "37"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47951732392156, 41.30408252772586]),
             {
               "landcover": 2,
               "system:index": "38"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47973726506078, 41.30382864714927]),
             {
               "landcover": 2,
               "system:index": "39"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49509647113905, 41.29372450136966]),
             {
               "landcover": 2,
               "system:index": "40"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.57015022700783, 41.33628018158097]),
             {
               "landcover": 2,
               "system:index": "41"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38754159094057, 41.52061411095093]),
             {
               "landcover": 2,
               "system:index": "42"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38576596857271, 41.51863799602306]),
             {
               "landcover": 2,
               "system:index": "43"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38872581071954, 41.526003710575566]),
             {
               "landcover": 2,
               "system:index": "44"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.33651702768518, 41.45620336290123]),
             {
               "landcover": 2,
               "system:index": "45"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.68854995992469, 41.433873780898075]),
             {
               "landcover": 2,
               "system:index": "46"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.73539747273642, 41.43674575266218]),
             {
               "landcover": 2,
               "system:index": "47"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4843984932059, 41.3370537137698]),
             {
               "landcover": 2,
               "system:index": "48"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48541886143941, 41.33804721822021]),
             {
               "landcover": 2,
               "system:index": "49"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.46102500993416, 41.35881385810257]),
             {
               "landcover": 2,
               "system:index": "50"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4616620345752, 41.35831759521186]),
             {
               "landcover": 2,
               "system:index": "51"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49105693162693, 41.389795534426945]),
             {
               "landcover": 2,
               "system:index": "52"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4833167709074, 41.39041327886414]),
             {
               "landcover": 2,
               "system:index": "53"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4906469081298, 41.38158509831319]),
             {
               "landcover": 2,
               "system:index": "54"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48681250025628, 41.37962937770168]),
             {
               "landcover": 2,
               "system:index": "55"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48806777407525, 41.37979038431717]),
             {
               "landcover": 2,
               "system:index": "56"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.484310098113, 41.55422684738333]),
             {
               "landcover": 2,
               "system:index": "57"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.61424349498157, 41.38762980254568]),
             {
               "landcover": 2,
               "system:index": "58"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.67577475083138, 41.62888409967873]),
             {
               "landcover": 2,
               "system:index": "59"
             })]),
     household = /* color: #ff47fe */ee.FeatureCollection(
         [ee.Feature(
             ee.Geometry.Point([-72.46465412680155, 41.447104648433715]),
             {
               "landcover": 3,
               "system:index": "0"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47358104099656, 41.44563488325679]),
             {
               "landcover": 3,
               "system:index": "1"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44529908043246, 41.46103694020829]),
             {
               "landcover": 3,
               "system:index": "2"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44580333572726, 41.46267713163709]),
             {
               "landcover": 3,
               "system:index": "3"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3456307401398, 41.44214358093655]),
             {
               "landcover": 3,
               "system:index": "4"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.35017344358279, 41.443149541156394]),
             {
               "landcover": 3,
               "system:index": "5"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.31504522175311, 41.447341212735054]),
             {
               "landcover": 3,
               "system:index": "6"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3375277146829, 41.523333951616166]),
             {
               "landcover": 3,
               "system:index": "7"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.33431442828307, 41.52339720773735]),
             {
               "landcover": 3,
               "system:index": "8"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48768448095257, 41.56768306322485]),
             {
               "landcover": 3,
               "system:index": "9"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48973905305797, 41.56809444666782]),
             {
               "landcover": 3,
               "system:index": "10"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49480727016727, 41.568973587880926]),
             {
               "landcover": 3,
               "system:index": "11"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.49206323341497, 41.571852176714344]),
             {
               "landcover": 3,
               "system:index": "12"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.48998598407753, 41.57329397118869]),
             {
               "landcover": 3,
               "system:index": "13"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50772041209093, 41.61098039010233]),
             {
               "landcover": 3,
               "system:index": "14"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.50596052312243, 41.63936813456677]),
             {
               "landcover": 3,
               "system:index": "15"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.59031142862254, 41.632188668515354]),
             {
               "landcover": 3,
               "system:index": "16"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.60631759263222, 41.63483129939881]),
             {
               "landcover": 3,
               "system:index": "17"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.60910019604026, 41.63511290908888]),
             {
               "landcover": 3,
               "system:index": "18"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.60203846525121, 41.6230336120366]),
             {
               "landcover": 3,
               "system:index": "19"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.65540481778203, 41.626767693494145]),
             {
               "landcover": 3,
               "system:index": "20"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.65596708419407, 41.62709332731921]),
             {
               "landcover": 3,
               "system:index": "21"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.67987757856798, 41.62767210916657]),
             {
               "landcover": 3,
               "system:index": "22"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.68016628618358, 41.62444091307909]),
             {
               "landcover": 3,
               "system:index": "23"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.67407263105314, 41.617055589999325]),
             {
               "landcover": 3,
               "system:index": "24"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.69055951321134, 41.61780034217131]),
             {
               "landcover": 3,
               "system:index": "25"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.70595314955543, 41.617008187853]),
             {
               "landcover": 3,
               "system:index": "26"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.70593169188331, 41.61661516313053]),
             {
               "landcover": 3,
               "system:index": "27"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.73265162068805, 41.58454376968052]),
             {
               "landcover": 3,
               "system:index": "28"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.7419459319568, 41.56268537524252]),
             {
               "landcover": 3,
               "system:index": "29"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.71849730300616, 41.53162033949269]),
             {
               "landcover": 3,
               "system:index": "30"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.67946236672152, 41.489135650575086]),
             {
               "landcover": 3,
               "system:index": "31"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.72542827257934, 41.45117213771794]),
             {
               "landcover": 3,
               "system:index": "32"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.56066050184833, 41.37500151215996]),
             {
               "landcover": 3,
               "system:index": "33"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.53197199833537, 41.2702395383826]),
             {
               "landcover": 3,
               "system:index": "34"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4853529294434, 41.27484144135864]),
             {
               "landcover": 3,
               "system:index": "35"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47811282055002, 41.27377679911548]),
             {
               "landcover": 3,
               "system:index": "36"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.47764764470769, 41.2737474283162]),
             {
               "landcover": 3,
               "system:index": "37"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.46416804199045, 41.274511591627245]),
             {
               "landcover": 3,
               "system:index": "38"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.45196036832039, 41.27980399115942]),
             {
               "landcover": 3,
               "system:index": "39"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44012377993766, 41.28172086641527]),
             {
               "landcover": 3,
               "system:index": "40"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3986861235845, 41.28175243209376]),
             {
               "landcover": 3,
               "system:index": "41"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.4018326395827, 41.28175206109508]),
             {
               "landcover": 3,
               "system:index": "42"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.39880614426814, 41.27886892320163]),
             {
               "landcover": 3,
               "system:index": "43"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3774488808701, 41.278095226744796]),
             {
               "landcover": 3,
               "system:index": "44"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.36678713630714, 41.283527452175136]),
             {
               "landcover": 3,
               "system:index": "45"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.35618657495134, 41.28811913181455]),
             {
               "landcover": 3,
               "system:index": "46"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.35411836954806, 41.312412714080324]),
             {
               "landcover": 3,
               "system:index": "47"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.35295433083012, 41.31628377968271]),
             {
               "landcover": 3,
               "system:index": "48"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.35376703575281, 41.32268045158885]),
             {
               "landcover": 3,
               "system:index": "49"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3941573169098, 41.342798359504606]),
             {
               "landcover": 3,
               "system:index": "50"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38652741398684, 41.350853053801]),
             {
               "landcover": 3,
               "system:index": "51"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.3936896150577, 41.36196345618953]),
             {
               "landcover": 3,
               "system:index": "52"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.38839176710601, 41.374053784036334]),
             {
               "landcover": 3,
               "system:index": "53"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.39891480286971, 41.383511273114365]),
             {
               "landcover": 3,
               "system:index": "54"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.43474989101612, 41.387102485061774]),
             {
               "landcover": 3,
               "system:index": "55"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.44219674006285, 41.3874016103061]),
             {
               "landcover": 3,
               "system:index": "56"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.43630359796005, 41.40538356448773]),
             {
               "landcover": 3,
               "system:index": "57"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.59407241247536, 41.561424344221116]),
             {
               "landcover": 3,
               "system:index": "58"
             }),
         ee.Feature(
             ee.Geometry.Point([-72.61919255632588, 41.586664076856366]),
             {
               "landcover": 3,
               "system:index": "59"
             })]);



/******************** 1. Helper Functions ********************/
/* Use TRACT Region Block
var campus = ee.FeatureCollection('TIGER/2020/TRACT')
 .filter('STATEFP == "09"')
 .filter('COUNTYFP == "007"')
 .filter('NAME == "5415"');
*/

// A function to mask the clouds in Sentinel-2
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags are set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

      return image.updateMask(mask).divide(10000);
}



/******************** 3. Satellite Dataset Processing ********************/
// Subset the TRACT dataset to Middlesex county
var middlesex = ee.FeatureCollection('TIGER/2020/TRACT')
  .filter('STATEFP == "09"')
  .filter('COUNTYFP == "007"');

// Get geometric data
var aoi = middlesex.geometry();

// Draw Middlesex outline on a new layer
var empty = ee.Image().toByte();
var outline = empty.paint({
  featureCollection: aoi,
  color: 0, // Transparant
  width: 3 // Border width
});
Map.addLayer(outline, {palette: "ff0000"}, "Area Outline");

// Cropland dataset
var dataset1 = ee.ImageCollection('USDA/NASS/CDL')
                 .filter(ee.Filter.date('2018-01-01', '2019-12-31'))
                 .first().select('cropland');

// Build the Sentinel 2 collection, filtered by date, bounds and percentage of cloud cover
var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
                 .filterDate('2020-01-01','2021-12-31')
                 .filterBounds(aoi)
                 .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                 .map(maskS2clouds);
print("Sentinel-2 Collection",  dataset);



/******************** 4. Construct Classfication Dataset ********************/
// RS Index Cacluate (NDVI\NDWI\EVI\BSI)
var add_RS_index = function(img){
  var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI').copyProperties(img,['system:time_start']);
  var ndwi = img.normalizedDifference(['B3', 'B8']).rename('NDWI').copyProperties(img,['system:time_start']);
  var evi = img.expression('2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))',
  {
    'NIR': img.select('B8'),
    'RED': img.select('B4'),
    'BLUE': img.select('B2')
  }).rename('EVI').copyProperties(img,['system:time_start']);
  var bsi = img.expression('((RED + SWIR1) - (NIR + BLUE)) / ((RED + SWIR1) + (NIR + BLUE)) ',
  {
    'RED': img.select('B4'),
    'BLUE': img.select('B2'),
    'NIR': img.select('B8'),
    'SWIR1': img.select('B11'),
  }).rename('BSI').copyProperties(img,['system:time_start']);
  var ibi = img.expression('(2 * SWIR1 / (SWIR1 + NIR) - (NIR / (NIR + RED) + GREEN / (GREEN + SWIR1))) / (2 * SWIR1 / (SWIR1 + NIR) + (NIR / (NIR + RED) + GREEN / (GREEN + SWIR1)))', {
    'SWIR1': img.select('B11'),
    'NIR': img.select('B8'),
    'RED': img.select('B4'),
    'GREEN': img.select('B3')
  }).rename('IBI').copyProperties(img,['system:time_start']);
  return img.addBands([ndvi, ndwi, evi, bsi, ibi]);
};

// Calculate NDVI\NDWI\EVI\BSI for the dataset
var dataset = dataset.map(add_RS_index);

// List of bands that are of important
var bands = ['B2','B3','B4','B5','B6','B7','B8','B8A','B11','NDVI','NDWI','BSI'];

// Calculate the median to ensures that all pixels in the image is good
var imgcol_median = dataset.select(bands).median();

// Load "NASA Digital Elevation 30m" dataset
var dem_data = ee.Image("NASA/NASADEM_HGT/001");
var aoi_dem = dem_data.select('elevation').clip(aoi).rename('DEM');
var img_constructor = imgcol_median.addBands(aoi_dem).clip(aoi);



/******************** 5. Training & Testing ********************/
// Build training set
var class_property = 'landcover';
var train_points = water.merge(forest).merge(household);
var train_data = img_constructor.sampleRegions({
  collection: train_points,
  properties: [class_property],
  scale: 10, // scale down
  tileScale: 8 // scale down
});
print ('train_data', train_data);

// Prepare for training
var withRandom = train_data.randomColumn('random'); // Randomize samples
var split = 0.8; // Use a 8:2 train-test split
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

// Initialize a Random Forest Classifier
var rf = ee.Classifier.smileRandomForest({
  numberOfTrees: 20,
  bagFraction: 0.8
}).train({
  features: trainingPartition,
  classProperty: class_property,
  inputProperties: bands
});

// Run the classifier
var img_classfication = img_constructor.classify(rf);

// Make testing set
var test = testingPartition.classify(rf);

// Compute the confusion matrix
var confusionMatrix = test.errorMatrix('landcover', 'classification');
print('ConfusionMatrix',confusionMatrix); // Confusion Matrix
print('Overall accuracy', confusionMatrix.accuracy()); // accuracy score
print('Kappa score', confusionMatrix.kappa()); // kappa score

Map.centerObject(middlesex, 12);
// Map.addLayer(middlesex, {}, 'Area Grid');
Map.addLayer(img_classfication.clip(aoi), {min: 1, max: 4, palette: ['orange', 'blue', 'green', 'yellow']}, 'Geography');
var class1 = img_classfication.clip(aoi);



/******************** 6. Export the Result ********************/
// Export the classification map
Export.image.toDrive({
      image: class1,
      description: 'rfclass',
      fileNamePrefix: 'rf',
      folder: "class",
      scale: 10,  // size | dimension
      region: aoi,
      maxPixels: 1e13,  // default
      crs: "EPSG:4326"  // what to project on
  });
