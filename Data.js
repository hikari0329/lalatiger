var json = '{\
  "Question" :[\
{"Content":"依法應由納稅義務人申報繳納之稅捐，未於規定期間內 申報，其核課期間為？", "Opt":["5年","6年","7年","10年"] , "Answer" : 3},\
{"Content":"下列稅目中何者委託代徵人徵收？", "Opt":["遺產稅","證券交易稅","所得稅","營業稅"] , "Answer" : 2},\
{"Content":"王小明(戶籍在高雄市)對所得稅核定補稅通知單的內容 不服，應先向下列那個機關提起行政救濟？", "Opt":["高雄市 稅捐稽徵處","高雄國稅局","財政部","行政院"] , "Answer" : 2},\
{"Content":"個人欠繳已確定稅額達多少以上，財政部得函請內政部 入出國及移民署，限制其出境？", "Opt":["新臺幣 500萬元","新臺幣 1000萬元","新臺幣 1500萬元","新臺幣 750萬元"] , "Answer" : 3},\
{"Content":"被繼承人死亡前幾年內，其繼承之遺產已納遺產稅者， 不計入遺產總額？" , "Opt":["二年","三年","四年","五年"] , "Answer" : 4 },\
{"Content":"現行贈與稅贈與人每人每年之免稅額為？" , "Opt":["45萬元","445萬元","100萬元","220萬元"] , "Answer" : 4 },\
{"Content":"父母於子女婚嫁時所贈與之財物，總金額各不超過多少 元可不計入贈與總額？" , "Opt":["100萬元","110萬元","200萬元","222萬元"] , "Answer" : 1},\
{"Content":"以公共設施保留地贈與何者可免徵贈與稅？" , "Opt":["兄弟姊妹","岳父母","媳婦","父母"] , "Answer" : 4 },\
{"Content":"依我國遺產及贈與稅法（以下簡稱遺贈稅法）規定，贈 與稅之申報期限為贈與行為發生後幾個月或幾天內？" , "Opt":["四個月","三個月","二個月","30天"] , "Answer" : 4 },\
{"Content":"依我國遺贈稅法規定，現行贈與稅之稅率為何？" , "Opt":["5%","10%","20%","50%"] , "Answer" : 2 },\
{"Content":"房地合一課徵所得稅(新制)自何時開始施行？" , "Opt":["104年7月1日","104年12月31日","105年1月1日","105年6月30日"] , "Answer" : 3 },\
{"Content":"營利事業所得稅稅率由25％降至17％，自何時開始實施？" , "Opt":["97年度"," 98年度","99年度","100年度"] , "Answer" : 3 },\
{"Content":"機關、團體之扣繳義務人為何人？" , "Opt":["負責人","責應扣繳單位主管","主辦會計人員","主辦出納人員"] , "Answer" : 2 },\
{"Content":"依政治獻金法規定，對政黨、政治團體及擬參選人之捐 贈，以不超過所得額10﹪為限，其總額並不得超過新台 幣多少元？" , "Opt":["30萬元","40萬元","50萬元","60萬元"] , "Answer" : 3 },\
{"Content":"營利事業申報暫繳稅額應以其上年度結算申報應納稅額 之多少為暫繳稅額？" , "Opt":["2分之1","3分之1","4分之1","5分之1"] , "Answer" : 1 },\
{"Content":"營利事業各項資產遇物價上漲多少時可實施資產重估價 ？" , "Opt":["10%","15%","20%","25%"] , "Answer" : 4 },\
{"Content":"營利事業應於每年何時辦理暫繳申報？" , "Opt":["4月1日起至 4月30日","5月1日起至 5月31日","9月1日起至 9月30日","10月1日起至 10月31日"] , "Answer" : 3 },\
{"Content":"營利事業遭受災害損失，應於幾日內向國稅局申請？" , "Opt":["10日","15日","20日","30日"] , "Answer" : 4 },\
{"Content":"現行加值型營業稅徵收率為？" , "Opt":["1%","5%","15%","25%"] , "Answer" : 2 },\
{"Content":"營業人申請營業登記事項有變更時，應於事實發生之日 起幾日內向主管稽徵機關申請變更營業登記？" , "Opt":["5日","10日","15日","30日"] , "Answer" : 3 },\
{"Content":"小規模營業人及其他經財政部規定免予申報銷售額之營 業人，其營業稅稅率為？" , "Opt":["0.10%","1%","2%","5%"] , "Answer" : 2 },\
{"Content":"營業人漏開統一發票而遭停止營業處分者，須在一年內 經查獲多少次？" , "Opt":["一次","二次","三次","五次"] , "Answer" : 3 },\
{"Content":"營業人開立發票，應記載而未依規定記載或所載不實者 ，按統一發票所載銷售金額，處多少罰鍰？" , "Opt":["1%","2%","5%","10%"] , "Answer" : 1 },\
{"Content":"國內產製之菸酒，應於何時課徵菸酒稅？" , "Opt":["進口原料時","製造時","出廠時","銷售時"] , "Answer" : 3 },\
{"Content":"我國菸酒除課徵菸酒稅外，是否另加徵健康福利捐？" , "Opt":["僅就煙品加徵","僅就酒品加徵","菸酒均加徵","菸酒均不加徵"] , "Answer" : 1 },\
{"Content":"營業人出租財產所收取之押金，應如何計算銷售額？" , "Opt":["按年","按季","按月","按週"] , "Answer" : 3 },\
{"Content":"營利事業之帳簿及憑證之保存期限？" , "Opt":["1年及2年","3年及4年","4年及8年","5年及10年"] , "Answer" : 4 },\
{"Content":"下列何者非屬免用統一發票之範圍？" , "Opt":["小規模營業人","交通運輸 事業貨運收入","理髮業","銀行業"] , "Answer" : 2},\
{"Content":"下列何者非屬統一發票專章應刊明之項目？" , "Opt":["營業人名稱","統一編號","負責人名稱","地址"] , "Answer" : 3},\
{"Content":"營業人開立統一發票書寫錯誤者應如何處理？" , "Opt":["直接塗改","開立折讓單","收回作廢重開","無須處理"] , "Answer" : 3 },\
{"Content":"自105年1-2月期統一發票起，無實體電子發票專屬獎 項中，1百萬元獎項之組數？" , "Opt":["10組","20組","30組","40組"] , "Answer" : 1 },\
{"Content":"自105年1-2月期起無實體電子發票專屬獎項中， 2,000元獎項之組數？" , "Opt":["1,000組","2,000組","5,000組","8,000組"] , "Answer" : 4 },\
{"Content":"下列何種載具可向B2C電子發票營業人索取無實體電子 發票？" , "Opt":["悠遊卡","I-Cash卡","手機條碼","以上皆是"] , "Answer" : 4 },\
{"Content":"營業人發行現金禮券開立統一發票之時限？" , "Opt":["出售時","兌付時","收款時","以上皆是"] , "Answer" : 2 },\
{"Content":"統一發票的領獎期限為開獎日之次月6日起幾個月內？" , "Opt":["2個月","3個月","4個月","5個月"] , "Answer" : 2 },\
{"Content":"查詢是否適用稅額試算服務期間為？" , "Opt":["5月1日至 5月31日","4月25日至 5月31日","2月15日至 3月15日","4月1日至 5月15日"] , "Answer" : 2 },\
{"Content":"首稅族申請適用稅額試算服務或變更郵寄地址期間為？" , "Opt":["5月1日至 5月31日","4月25日至 5月31日","2月15日至 3月15日","4月1日至 5月15日"] , "Answer" : 3 },\
{"Content":"綜合所得稅特別扣除額項目中，設有排富條款的是？" , "Opt":["儲蓄投資 特別扣除額","身心障礙 特別扣除額","幼兒學前 特別扣除額","教育學費 特別扣除額"] , "Answer" : 3 },\
{"Content":"現行列舉扣除額不包括何者？" , "Opt":["捐贈","醫藥生育費","保險費","稅捐"] , "Answer" : 4 },\
{"Content":"個人海外所得自何時起納入最低稅負制之稅基？" , "Opt":["中華民國 95年1月1日","中華民國 96年1月1日","中華民國 98年1月1日","中華民國 99年1月1日"] , "Answer" : 4 },\
{"Content":"下列何者得適用教育學費特別扣除？" , "Opt":["納稅義務人本人","納稅義務人之 配偶","納稅義務人之 子女","納稅義務人之 兄弟姊妹"] , "Answer" : 3 },\
{"Content":"醫生自行開診所賺取之所得，應屬下列那一類所得？" , "Opt":["營利所得","執行業務所得","薪資所得","其他所得"] , "Answer" : 2 },\
{"Content":"個人對於國防捐贈，如欲申報列舉扣除，其額度最多不 超過綜合所得總額之多少？" , "Opt":["18%","20%","50%","不受金額限制"] , "Answer" : 4 },\
{"Content":"阿亞作家的稿費、版稅、樂譜、作曲、編劇、漫畫、演 講之鐘點費等之收入，全年合計數在多少金額的限度 內，免繳納綜合所得稅？" , "Opt":["100,000","180,000","460,000","780,000"] , "Answer" : 2 },\
{"Content":"下列何者，非所得稅法第14條第1項第3類規定之「薪 資所得」？" , "Opt":["津貼","股利","紅利","歲費"] , "Answer" : 2 },\
{"Content":"遺產稅目前的免稅額是多少？" , "Opt":["1200萬元","1300萬元","1400萬元","1500萬元"] , "Answer" :  1},\
{"Content":"在中華民國境內無住所，而於一課稅年度內在中華民 國境內居留滿多少天者，是為居住者？" , "Opt":["365天","280天","183天","80天"] , "Answer" :  3},\
{"Content":"政府舉辦之獎券中獎獎金，每聯獎額超過新臺幣2,000 元者，按給付金額扣繳百分之多少？" , "Opt":["20%","40%","60%","80%"] , "Answer" : 1 },\
{"Content":"中華民國境內居住之個人，如有各類所得，每次應扣 繳稅款不超過多少元者，得免予扣繳？" , "Opt":["8,000元","6,000元","4,000元","2,000元"] , "Answer" : 4 },\
{"Content":"公用事業自何時開立電子發票？" , "Opt":["104年7月起","104年12月起","105年1月起","105年7月起"] , "Answer" : 3 },\
{"Content":"哪一項非屬公用事業開立無實體電子發票範圍？" , "Opt":["台灣電力公司","中華電信","自來水公司","鐵路局"] , "Answer" :  4},\
{"Content":"依貨物稅條例第12條之5規定，中古汽車報廢或出口換 購新車，得減徵 貨物稅多少?" , "Opt":["2萬元","2萬5千元","3萬元","5萬元"] , "Answer" : 4 },\
{"Content":"依貨物稅條例第12條之5規定，中古機車報廢或出口換 購新車，得減徵 貨物稅多少?" , "Opt":["2千元","4千元","6千元","8千元"] , "Answer" : 2 },\
{"Content":"依貨物稅條例第12條之5規定，自105年1月8日起幾年 內，得適用中古汽、機車報廢或出口換購新車 減徵貨物稅優惠?" , "Opt":["1年內","3年內","5年內","7年內"] , "Answer" : 3 },\
{"Content":"下列哪一個非屬儲存無實體電子發票載具？" , "Opt":["手機條碼","一卡通","自然人憑證","健保卡"] , "Answer" : 4 },\
{"Content":"財政部高雄國稅局吉祥物為何?" , "Opt":["啦啦虎","大義","寶可夢","啦啦熊"] , "Answer" : 1 },\
{"Content":"政府公益彩券中獎獎金需依百分之多少就源扣繳， 不用再併入綜合所得稅申報？" , "Opt":["10%","15%","20%","25%"] , "Answer" : 3 },\
{"Content":"綜合所得稅網路報稅有哪些登入方式？" , "Opt":["自然人憑證","健保卡+ 註冊密碼","「身分證統一編號 +戶號」","以上皆可"] , "Answer" : 4 },\
{"Content":"個人海外所得達新臺幣多少元以上始需計入個人基 本所得總額？" , "Opt":["100萬","200萬","300萬","400萬"] , "Answer" : 1 },\
{"Content":"個人最低稅負的稅率為何？" , "Opt":["20%","40%","60%","80%"] , "Answer" : 1 }\
  ]}' ;
var obj = JSON.parse(json);