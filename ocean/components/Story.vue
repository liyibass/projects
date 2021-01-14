<template>
    <div class="Story" id="Story" ref="storyRef">
        <!-- <div class="audioIndex">
            {{ currentAudioIndex }}
        </div> -->
        <DegreeRuler :audioIndex="currentAudioIndex" />

        <div class="Story__wrapper">
            <ArticleSubTitle title="澎湖的海 是他童年的夢" />

            <div class="ArticleParagraph">
                Yannick 對珊瑚礁的迷戀要追溯至童年。他出生於 1974
                年的蔚藍海岸，門前是地中海，門後是阿爾卑斯山，大自然就是他的遊樂場。年紀稍長，他會與加入地質協會的父母一起採集化石，並常溜進建造於懸崖上，由前摩納哥親王、海洋學者阿爾貝特一世，於
                1910 年建造的海洋博物館。
            </div>

            <div class="ArticleParagraph">
                這座博物館有全球首創的水下投影，引領
                Yannick認識亞熱帶海洋因珊瑚礁所孕育的獨特面貌，「多彩、瑰麗、複雜，是有別地中海僅有水草、海膽、種類單純的魚類的海底世界。」
            </div>

            <div class="ArticleParagraph">
                童年養成讓他夢想成為海洋博物學者。但高中接觸攝影，浸泡在圖書館的影音區，讓他受實驗音樂吸引，最後選擇音樂學院就讀。Yannick
                專攻編曲，並以各類原始聲音或錄音器的合成聲音的「電子原音」作為素材。日後進一步研讀音樂人類學，試圖透過聽覺打破文化界線，並開始進行戶外聲音採集。
            </div>

            <div class="ArticleParagraph">
                初始，他好奇自然與人類物質碰撞產生的抽象聲音，如風吹過人類架設於山中的電線時，會發出笛鳴一樣的聲響。但有別早期尋找衝突產生的聲音張力，Yannick
                後來關注如何透過聲音跟聆聽，去思考人與物種的關係。
            </div>

            <ArticleImage
                :imageUrl="image11"
                comment="Yannick 的祖母是業餘考古學家，環遊世界時帶回如希臘人於葬禮時，以小玻璃瓶收集親友眼淚作為陪葬品的「淚樽」。讓他明白所有物質都承載記憶、故事與文化。其中他最著迷的，是珊瑚礁生物寶螺。"
            />

            <div class="ArticleParagraph">
                2004
                年，他隨同樣身為藝術家的妻子蔡宛璇來台，返回老家澎湖。蔡宛璇的表姑丈是退休漁夫，吆喝
                Yannick 去浮潛。第一次踏入澎湖的海，Yannick
                說「好熱」。而這高於地中海的水溫，催生了他兒時感到目眩神迷的畫面。
            </div>

            <div class="ArticleParagraph">
                「第一印象是『好多東西要看啊！』、『這是什麼奇怪的生物？』像海蛞蝓，我在法國只看過一隻，且牠是黑色並死掉的；澎湖的海蛞蝓有各種顏色和大小，甚至有會發光、帶著細毛、被光照耀後會變色，無法用一般相機清楚拍攝的櫛水母（Comb
                jellies）……太有趣，像外星世界
            </div>
        </div>

        <ArticleCarousel :images="slides" />

        <div class="Story__wrapper">
            <div class="ArticleParagraph">
                他形容自己美夢成真。只要有空，便潛入海裡辨識生物、觀察牠們的行為，並發想錄下珊瑚礁生物的聲音，只是沒有特別積極。但
                2008 年一場史無前例的寒害讓他意識，再不行動，將會太遲。
            </div>

            <ArticleSubTitle title="用「聽」認識世界" />

            <div class="ArticleParagraph">
                2008 年 2
                月，蒙古大陸冷氣團持續增加，中國又大量融雪，稀釋鹽分，低溫低鹽的中國沿岸流越過雲彰隆起，影響澎湖及台灣西北半部沿岸。加上強東北季風長達一個月，使澎湖水下
                10 公尺溫度，持續有半個月都僅11.7°C。Yannick
                說，當時澎湖水族館養殖的石斑魚都已凍死，水族館卻沒有任何說明，只是持續推廣觀光，希望民眾大口吃魚。「那一年，我覺得自己開始討厭澎湖人。」
            </div>

            <div class="ArticleParagraph">
                多年後回憶，Yannick
                語氣仍帶微薄的責怪——為何多數人類看到魚只會聯想「好不好吃」、「新不新鮮」，頂多就是「漂不漂亮」，而不曾好奇「魚的世界是怎樣的世界？牠怎麼存活、牠思考什麼、觀察什麼、經歷什麼？」大眾的無感讓他憤怒，加上深受氣候變遷影響震撼，「所以開始思考用聲音做些事去消化感受。」
            </div>
        </div>

        <ArticleFullImage
            imageName="13"
            comment="「人類很擅長影像，視覺與語言緊密連結。我們能透過照片描述許多事，但罕有人能用聲音描述一棵樹。語言未能聯繫聆聽。」"
        />

        <div class="Story__wrapper">
            <div class="ArticleParagraph">
                Yannick舉例，「像卡通裡青蛙總是『呱呱』，但台灣沒有一種青蛙叫聲是『呱呱』。」這樣的習得，窄化人類對事物的認識，同時也限縮表達與溝通。
            </div>

            <div class="ArticleParagraph">
                但囿限也有雙層含義，人類聽覺其實十分敏銳，「只是聆聽的習慣從小被摧毀。」Yannick認為，懂得聆聽，聲音就能喚醒語言，乃至身體經驗。「若我們聽見珊瑚礁魚類每天清晨都會唱歌，可能就會想『牠們是否快樂』？」由此不斷延伸，人類將會思考：為何海洋生物遭受傷害？
            </div>

            <div class="ArticleParagraph">
                他的想法承襲自愛沙尼亞的生物學家魏克斯庫爾（Jakob von
                Uexküll）。魏克斯庫爾以「Umwelt（德文「周遭世界）」作為理解生物的視角。他認為每個生物都以自己的方式在感知環境，而感知就是接受和製造符號的過程，這過程建構了生物的「周遭世界」。有多少生命體，就有多少「獨特的」世界，但也意味：每個物種永遠無法主觀地理解或察覺另一種物種構築的世界。
            </div>

            <div class="ArticleParagraph">
                儘管如此，這曖昧縫隙卻是人類得以深掘之處。人類富想像力，且有一再突破的科技，得以接近其他生物的世界。Yannick希望透過錄製珊瑚礁的聲音，讓人踏出原本狹隘的認知，理解珊瑚礁、海洋與人類的緊密鏈結。但從發想到開錄，Yannick走了十年。
            </div>

            <ArticleImage
                :imageUrl="image14"
                comment="水下錄音設備不若攝影風行，Yannick 費時多年才找到能穩定錄音的方式。"
            />

            <ArticleSubTitle title="地球在暖化 海裡下了雪" />

            <div class="ArticleParagraph">
                有別一般水下錄音，Yannick
                的計畫核心是要辨別不同聲音的意義。因此不是單純聲音採集，還得能清楚辨識物種、行為、在什麼時間或季節所發出的聲響。這使計畫無法像鯨豚錄音，只要水底麥克風下水即可。
            </div>

            <div class="ArticleParagraph">
                他想過一人在船上拉線、一人帶設備下潛，但潮汐跟風浪會讓錄音窒礙難行；將錄音設備架設在海中也有風險，「很難固定設備。萬一被浪沖走，電池對海洋是很大的污染物。」此外，水下錄音不若攝影風行，市面上甚至買不到錄音設備防水盒。
            </div>

            <div class="ArticleParagraph">
                2016
                年，他嘗試自製防水盒結合浮板進行錄音。但浮板隨浪晃蕩，會錄到雜音。2018
                年，Yannick透過台灣聲景協會得到一台錄音機，並從漁夫的生活經驗獲得啟發——他將錄音機裝入一圓筒狀的防水盒中，再用採集漁獲的網袋包裹，網袋上下拉開，可服貼防水盒，其上下兩端分別能繫住浮板與重物，錄音設備終於能穩穩地在水中留下清晰聲響。
            </div>

            <div class="ArticleParagraph">
                只是克服技術問題，珊瑚礁的衰敗每況愈下。寒害時，盛產珊瑚的澎湖青灣，其水深
                2 至 2.5
                米、對溫度敏感的軸孔珊瑚，全數白化死亡。澎湖水試所即刻進行長期水下珊瑚監測，幾年過去，恢復情況並不好。Yannick
                今年下水觀察，發現澎湖海域的珊瑚又再度受創，「今年太熱，珊瑚就像泡在溫泉裡。」
            </div>

            <div class="ArticleParagraph">
                事實上，不只澎湖，2020
                年全台珊瑚礁都備受高溫折磨。島人海洋工作室負責人蘇淮是小琉球的潛水教練，他觀察自七月起，小琉球珊瑚礁開始白化，過往會隨入秋而恢復，今年白化情況卻節節升高；海底攝影專家李世明形容：「就像海裡下了雪。」
            </div>

            <ArticleImage
                :imageUrl="image15"
                comment="陳昭倫長年進行台灣珊瑚礁體檢，發現曾多次躲過全球白化衝擊的台灣珊瑚礁，在 2020 年的高溫下，大受影響。擔心未來大規模白化可能變成常態。"
            />

            <div class="ArticleParagraph">
                「珊瑚可生存的水溫是 18 至 28°C，若水溫提高 0.5 至
                1°C，牠們就會白化。」中研院生物多樣性研究中心研究員陳昭倫專攻珊瑚研究，他說珊瑚看似植物，實為花蟲綱動物，由許多珊瑚蟲組成珊瑚群體，珊瑚蟲會伸出觸手，捕食浮游生物。「石珊瑚是唯一能夠形成碳酸鈣骨骼，在熱帶與亞熱帶淺水海域建礁的花蟲動物，其中幫助珊瑚造礁的重要因子，就是共生藻。」
            </div>

            <ArticleSubTitle title="珊瑚白化嚴重程度 面積變大頻率變高" />

            <div class="ArticleParagraph">
                珊瑚共生藻屬於單細胞的渦鞭藻類，珊瑚的多樣色彩，正來自它們。共生藻行光合作用後，能提供珊瑚九成以上的養分。但共生藻怕強光和熱，當紫外線增強或水溫升高，它們會因熱敏感降低色素。「共生藻短暫離開不會造成珊瑚死亡。但若環境持續劣化，珊瑚蟲最終會飢餓身亡，又或受微生物攻擊而感染、死亡。」陳昭倫說。
            </div>

            <div class="ArticleParagraph">
                1996
                年，陳昭倫自澳洲學成返台，正逢氣候變遷議題被提出討論。「當時沒人在意，但
                1998
                年全球就發生第一次珊瑚大白化。」澳洲詹姆斯庫克大學海洋生物學教授泰瑞・休斯（Terry
                Hughes）後來與多位學者歸納出 1980 年至 2016 年，包含台灣的 100
                處珊瑚白化海域，發現 1980
                年代，白化多為聖嬰現象，或異常寒冷、炎熱等小型壓力源導致，後期則與高溫有關。
            </div>

            <div class="ArticleParagraph">
                過去 40 年間，頻繁發生嚴重白化事件的時間也急遽縮短。從 1980
                年代初每 25 至 30 年一次，到 2016 年的每 5.9 年一次。100
                個地點中，有 300 次嚴重白化事件（大於
                30％、在數十至數百公里範圍內發生白化），以及 312
                個中等程度的白化。
            </div>

            <!-- Iframe -->
            <ArticleIframe
                iframeUrl="https://public.flourish.studio/visualisation/4620597/"
            />

            <div class="ArticleParagraph">
                泰瑞．休斯說：「我們的分析顯示，珊瑚礁從 1980
                年前僅有罕見區域性白化的階段，過渡到 1980
                年代，因全球暖化加劇聖嬰現象作用的中間階段；但過去 20
                年間，無需聖嬰現象導致的海水異常升溫，區域性規模的珊瑚礁白化就已頻繁發生。」值得注意的是，這
                100 個地點中，只有 6 個地點沒有白化，而有 88% 的地點，在歷經
                1997 年至 1998 年的白化後，又再次重複發生嚴重白化事件。自 1980
                年起，31％ 的珊瑚礁地點經歷 4 次或更多（最高多達 9
                次）的嚴重白化事件。
            </div>

            <div class="ArticleParagraph">
                台灣珊瑚礁位處全球關鍵位置，其南北界線恰是珊瑚大略分佈緯度，台灣珊瑚的命運，預示著全球珊瑚的未來。陳昭倫說，台灣珊瑚在過去三、四次的全球大白化衝擊中，僅有一次嚴重受創，且集中在南部區域。「今年連北部、東北角、宜蘭珊瑚也大規模白化，前所未見。」
            </div>
        </div>

        <ArticleCarousel :images="slides2" />

        <div class="Story__wrapper">
            <div class="ArticleParagraph">
                根據美國國家海洋暨大氣總署（NOAA）監測，台灣自五月起水溫就偏高，七月時台灣周遭水域幾乎全為紅色警戒，珊瑚整整浸泡在超過攝氏
                30
                度的海水長達三個月。中研院生物多樣性研究中心博士後研究員郭兆揚與陳昭倫一起進行全台調查，共調查
                62 個樣點、28250 株珊瑚，發現有 52%
                的珊瑚分別受到不同程度熱壓迫。
            </div>

            <ArticleImage
                :imageUrl="image18"
                comment="台灣氣溫升溫程度高於全球平均，今年海溫高達 31、32 度，且數月高溫，對耐熱程度約 28 度的珊瑚而言相當折磨。"
            />

            <ArticleSubTitle title="全台珊瑚的白色警報" />
            <!-- Todo -->
            <div class="ArticleParagraph">
                珊瑚白化分為六等級，調查顯示，31% 的珊瑚是白化等級 4
                （51~99%白化）至等級 6（已死亡長藻），預估會全數死亡。其餘 8%
                的珊瑚屬於白化等級
                3（1~50%白化），未來會死亡或恢復健康依水溫變化趨勢而定。若以地理區來看，小琉球因最早接觸來自南中國海的熱水團，又是缺乏峽灣的島嶼地形，使熱水遲遲無法散去，白化程度最嚴重，預計損失
                55％ 的珊瑚礁。東北角與墾丁次之，有 30% 的珊瑚損失。
            </div>

            <div class="ArticleParagraph">
                郭兆揚說，根據團隊在 2004
                年開始於野柳長期監測水溫至今的結果顯示，夏天愈來愈熱、冬天水溫又低於適合造礁珊瑚生長下限（<18℃）的日子愈來愈少，「今年東北角的白化現象是一嚴重警訊。」
            </div>

            <div class="ArticleParagraph">
                而過往墾丁核三廠溫排水口的珊瑚曾因長年承受高溫演化出耐熱基因，「但也只能多耐一度，今年排水口水溫上看
                34°C，此區珊瑚反而嚴重白化。陳昭倫感嘆，珊瑚調適與演化速度完全趕不上氣候變遷影響。中研院團隊與菲律賓研究單位合作也發現珊瑚白化範圍逐漸向北擴展，高緯度的韓國及日本珊瑚生態也將受白化衝擊。
            </div>

            <ArticleImage
                :imageUrl="image19"
                comment="聯合國政府間氣候變遷專門委員會（IPCC）警告，若 2050 年無法保持全球均溫較前工業化時代的升幅於 1.5℃ 內，屆時全球 99％ 的珊瑚礁都會死亡，且將為人類帶來災難。"
            />

            <ArticleSubTitle title="最壞情況 2050 年 99% 珊瑚都將死亡" />

            <div class="ArticleParagraph">
                2020
                年的夏天為何如此炎熱？中研院環境變遷研究中心副主任許晃雄解釋，是因副熱帶高壓偏強，導致太陽輻射增加所致。過往西北太平洋
                1 至 6 月平均會有 4.2 個颱風生成，7 月底可增加到 7.9
                個。颱風可擾動海洋，帶走多餘的熱，但今年 5、6 月分別僅有 1
                個颱風，7
                月份全無，是有氣象紀錄以來未曾發生的現象。「過高副熱帶高壓會壓抑季風槽發展，導致對流偏弱，反而使颱風無法生成。」
            </div>

            <div class="ArticleParagraph">
                初步分析，今年副熱帶高壓偏強與全球海溫異常有關，因人類排碳所多出來的熱，90%
                都被海吸收。據 NOAA統計，目前大氣中二氧化碳濃度已達
                411ppm。迄2017年止，人為導致的暖化已達工業化前水平約
                1°C。而台灣平均升溫是 1.4℃，高於全球。
            </div>

            <div class="ArticleParagraph">
                許晃雄說，2020
                年的異常現象會否成為常態還有待觀察，但暖化與災難的關聯已很明顯：「今年澳洲、加州大火；東南亞、日本等地的豪雨與水患即是徵兆。台灣雖未有如此災難，但若暖化持續，預估未來颱風會變少，台灣將面臨春季常態性缺水危機。而颱風強度會增強
                3 至 5 成，極端降雨量也會增加，預估會比莫拉克當時雨量增加
                40％。」
            </div>

            <div class="ArticleParagraph">
                綠色和平倡議，台灣應盡快宣示氣候緊急，並投入建立完善的珊瑚生態監測系統。因聯合國政府間氣候變遷專門委員會（IPCC）警告，若
                2050 年無法保持全球均溫較前工業化時代的升幅於 1.5℃內，屆時全球
                99％的珊瑚礁都會死亡，地球更會引發一系列災難性變化。
            </div>

            <ArticleSubTitle title="聽，珊瑚在哀歌" />

            <div class="ArticleParagraph">
                在一個龐大的珊瑚礁生態系中，可以觀察到多達 1500
                種魚類。根據研究，珊瑚覆蓋度最高的地方，槍蝦及魚類發出聲音次數、頻率和聲音強度也高。生態聲學專家、中研院生物多樣性研究中心助研究員林子皓說，目前已知珊瑚白化後，珊瑚礁的聲音已經產生變化，「至於海洋是否會變得寂靜無聲尚待觀察，畢竟白化是漸進的，珊瑚死亡，礁體還是會提供棲息空間。」但科學家曾試圖在白化珊瑚礁播放健康珊瑚礁聲音吸引生物前往棲息，「生物有來，但棲地沒有恢復，牠們依舊離開。」
            </div>

            <div class="ArticleParagraph">
                生物離開，因爲牠們聆聽的「聲音」，是一全幅、具有脈絡、彼此關聯的生命景象。那是
                Yannick 所說——
            </div>
        </div>
    </div>
</template>

<script>
import 'intersection-observer'
import scrollama from 'scrollama'

import ArticleSubTitle from '~/components/Article/ArticleSubTitle'
import ArticleImage from '~/components/Article/ArticleImage'
import ArticleCarousel from '~/components/Article/ArticleCarousel'
import ArticleFullImage from '~/components/Article/ArticleFullImage'
import ArticleIframe from '~/components/Article/ArticleIframe'

import DegreeRuler from '~/components/DegreeRuler'

import image11 from '~/assets/images/11.jpg'
import image14 from '~/assets/images/14.jpg'
import image15 from '~/assets/images/15.jpg'
import image18 from '~/assets/images/18.jpg'
import image19 from '~/assets/images/19.png'
import image12_1 from '~/assets/images/12-1.jpg'
import image12_2 from '~/assets/images/12-2.jpg'
import image12_3 from '~/assets/images/12-3.jpg'
import image12_4 from '~/assets/images/12-4.jpg'
import image17_1 from '~/assets/images/17-1.jpg'
import image17_2 from '~/assets/images/17-2.jpg'
import image17_3 from '~/assets/images/17-3.jpg'

export default {
    components: {
        ArticleSubTitle,
        ArticleImage,
        ArticleCarousel,
        ArticleFullImage,
        ArticleIframe,
        DegreeRuler,
    },

    data() {
        return {
            storyHeight: 7000,
            currentAudioIndex: 0,
            audioList: ['audio1', 'audio2', 'audio3', 'audio4', 'audio5'],

            image11,
            image14,
            image15,
            image18,
            image19,

            slides: [
                {
                    id: 'slide-1',
                    title: 'Picture #1',
                    imageUrl: image12_1,
                    comment: 'Slide content.',
                },
                {
                    id: 'Picture-2',
                    title: 'Slide #2',
                    imageUrl: image12_2,
                    comment: 'Slide content.',
                },
                {
                    id: 'Picture-3',
                    title: 'Slide #3',
                    imageUrl: image12_3,
                    comment: 'Slide content.',
                },
                {
                    id: 'Picture-4',
                    title: 'Slide #4',
                    imageUrl: image12_4,
                    comment: 'Slide content.',
                },
            ],
            slides2: [
                {
                    id: 'slide-1',
                    title: 'Picture #1',
                    imageUrl: image17_1,
                    comment: 'Slide content.',
                },
                {
                    id: 'Picture-2',
                    title: 'Slide #2',
                    imageUrl: image17_2,
                    comment: 'Slide content.',
                },
                {
                    id: 'Picture-3',
                    title: 'Slide #3',
                    imageUrl: image17_3,
                    comment: 'Slide content.',
                },
            ],
        }
    },

    async mounted() {
        const degreeRulerDOM = document.querySelector('.DegreeRuler')
        function fetchHeight(storyDOM) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(storyDOM.$refs.storyRef.clientHeight)
                    // resolve(5000)
                }, 3000)
            })
        }
        const storyHeight = await fetchHeight(this)
        const audioCount = this.audioList.length
        const interval = 1 / audioCount
        // ex: if there's 5 audio, interval = 0.2
        // and current progress is 0.3
        // then audio index = 0.3 / 0.2 = 1 (2nd audio)

        const yearAudioScene = this.$scrollmagic
            .scene({
                triggerElement: '#Story',
                offset: 0,
                triggerHook: 0,
                duration: storyHeight,
            })
            .on('progress', (e) => {
                const audioIndex = Math.round(e.progress / interval)
                if (audioIndex === this.currentAudioIndex) return

                // set to max if overflow
                this.currentAudioIndex =
                    audioIndex < audioCount ? audioIndex : audioCount - 1
            })
            .on('enter', (e) => {
                degreeRulerDOM.style.position = 'fixed'
            })
            .on('leave', (e) => {
                degreeRulerDOM.style.position = 'absolute'
            })

            .addIndicators({ name: 'yearAudioScene' })

        this.$scrollmagic.addScene(yearAudioScene)
    },
}
</script>

<style lang="scss" scoped>
.Story {
    z-index: 105;
    position: relative;
    background: white;
    padding-bottom: 36px;

    &__wrapper {
        @include atMedium {
            width: 83.056%;
            margin: auto;
        }

        @include atUltraLarge {
            max-width: 1196px;
            margin: auto;
        }
    }

    padding-top: 77px;
    @include atSmall {
        padding-top: 60px;
    }
    @include atMedium {
        padding-top: 120px;
    }
}

.ArticleParagraph {
    position: relative;

    font-family: PingFang TC;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 180%;
    /* or 29px */
    text-align: justify;

    padding: 0 20px;
    margin: 0 0 29px;

    &:last-child {
        margin-bottom: 24px;
    }

    @include atSmall {
        max-width: 440px;

        padding: 0;
        margin: 0 40px 29px;
    }

    @include atMedium {
        width: 53.512%;
        max-width: none;

        padding: 0;
        margin: 0 40px 29px;
    }

    @include atUltraLarge {
        // max-width: 640px;
    }
}

// .audioIndex {
//     width: 20px;
//     height: 20px;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 100;
//     background: white;
//     border: 1px solid red;
//     line-height: 20px;
//     text-align: center;
// }
</style>
