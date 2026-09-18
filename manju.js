const courseGroups=[
  {
    name:'认知与流程',range:'01—02',lessons:[
      {number:1,module:'项目认知',title:'AI漫剧是怎样制作出来的',content:'AI漫画、动态漫、AI漫剧和AI短片的区别；故事、角色、场景、声音、镜头、剪辑六个生产环节；常见制作路线；AI漫剧常见问题：故事不清、角色变脸、镜头混乱、节奏拖沓',practice:'拆解一部60秒左右的AI漫剧，标出故事节点、角色素材、镜头类型和声音组成',output:'《AI漫剧作品拆解表》'},
      {number:2,module:'流程入门',title:'AI漫剧创作全链路解析',content:'从选题、剧本、角色设定、场景设计、分镜、关键帧、配音、图生视频到剪辑成片的完整流程；各环节的输入与输出；素材如何逐步流转；常规制作路线与问题返修路线；项目文件夹和素材命名规范',practice:'一个完整案例倒推制作流程；学生使用预设剧本、人物和声音素材，快速完成一个10—15秒的微型漫剧片段',output:'10秒左右的体验样片'}
    ]
  },
  {
    name:'剧本与资产',range:'03—04',lessons:[
      {number:3,module:'故事设计',title:'剧本构建基础与AI辅助构建',content:'主题、人物、目标、阻碍、冲突和结局等剧本基本要素；“人物＋目标＋阻碍＋变化”的故事公式；60—90秒漫剧的钩子、铺垫、升级、高潮与结尾；使用AI完成创意发散、人物关系构建、故事梗概生成和结构优化',practice:'从一句故事创意出发，通过多轮AI对话形成故事梗概和多个剧情节点，再由学生进行人工删减与改写',output:'故事脚本—分镜脚本'},
      {number:4,module:'资产准备',title:'资产落地',content:'从剧本中提取角色、服装、表情、场景和关键道具；区分核心资产、镜头资产与临时素材；将文字设定转化为可生成的视觉描述；建立资产编号、命名、版本和文件夹规范；选择角色定妆图、场景基准图和关键道具参考图；制定素材验收标准',practice:'拆解自己的剧本，完成资产清单；生成1名核心角色、1个核心场景和1件关键道具的首版参考图，并检查风格是否统一',output:'《AI漫剧资产清单》与首批视觉资产包'}
    ]
  },
  {
    name:'模型与生成',range:'05—07',lessons:[
      {number:5,module:'视频生成',title:'视频生成模型特点与选型',content:'从提示词理解、人物一致性、动作表现、物理规律、镜头运动、画风稳定、生成速度等维度认识不同视频模型；区分擅长人物表演、动作场面、运镜、风格化画面和参考图保持的模型；根据镜头需求选择模型，而不是整部作品只使用一个模型',practice:'使用完全相同的图片和提示词，在2—3种模型中生成同一镜头；从人物稳定、动作准确、画面质量和镜头可用性等方面进行评分',output:'项目模型选型方案'},
      {number:6,module:'视频生成',title:'视频生成方式与镜头控制',content:'文生视频、首帧生成、首尾帧生成、全能参考或多图参考、动作参考等方式的工作原理和控制能力；比较不同方式在人物一致性、动作自由度、镜头走向、结尾控制和生成稳定性方面的差异；根据镜头任务选择合适方式',practice:'使用同一个角色和场景，分别通过首帧、首尾帧和全能参考生成镜头，比较三种方式的控制效果',output:'三种生成方式对比样片'},
      {number:7,module:'一致性控制',title:'提示词系统与参考图使用',content:'固定描述和镜头变量的分离；人物、服装、场景、画风四层锁定；参考图的使用顺序；素材命名和版本管理；变脸、换装、风格漂移的修正方法',practice:'使用同一角色生成三个不同景别镜头，诊断并修正不一致问题',output:'《项目提示词模板》与一致性测试图'}
    ]
  },
  {
    name:'分镜与视听',range:'08—11',lessons:[
      {number:8,module:'分镜设计',title:'从剧本到可执行分镜',content:'全景、中景、近景和特写；建立镜头、动作镜头、反应镜头和转场镜头；景别变化；视线方向与空间关系；静态画面如何制造叙事感',practice:'将剧本拆成12—18个镜头，填写画面、对白、时长和运动方式',output:'《AI漫剧分镜表》'},
      {number:9,module:'画面生产',title:'关键帧与镜头素材制作',content:'首帧、尾帧和中间关键帧；人物与场景组合；构图、视线、动作起点和画面留白；字幕区域；哪些问题应该重新生成，哪些可以通过合成解决',practice:'完成前4—6个镜头的关键帧，并进行一致性检查',output:'第一组镜头关键帧素材包'},
      {number:10,module:'声音制作',title:'多角色配音与对白表演',content:'角色音色区分；语速、停顿、重音和情绪；旁白与对白关系；长句拆分；音色一致性控制',practice:'为一个完整场景制作多角色对白，调整语气和时长',output:'《角色声音设定表》与对白音频包'},
      {number:11,module:'动态制作',title:'漫剧镜头运动设计',content:'景深分层、推拉摇移、人物微动作和完整动作的区别；根据叙事需要选择运动方式；图生视频提示词；控制动作幅度；避免无意义运镜',practice:'将三个关键帧分别制作成氛围镜头、人物表演镜头和动作镜头',output:'三种动态镜头样片'}
    ]
  },
  {
    name:'风格与动作',range:'12—14',lessons:[
      {number:12,module:'风格化制作',title:'风格化热血OP制作',content:'日漫OP的视听特征；东方灾后世界观与资产准备；15秒节奏分段；人物动作、摄影机运动、视觉包装与音乐卡点协同',practice:'按分段时间轴完成一段15秒单角色战斗OP，并用动作拆解公式检查连续性',output:'15秒风格化热血战斗OP'},
      {number:13,module:'动作武打戏',title:'动作、冲突与视觉高潮',content:'武打戏的起势、进攻、防守、反击和结果；将复杂打斗拆成1—2秒的动作单元；人物站位、攻击方向、视线、惯用手和武器位置的连续性；起始姿势、接触姿势和结束姿势等关键动作帧',practice:'制作一段10秒打戏',output:'打戏高潮段落'},
      {number:14,module:'后期合成',title:'剪辑、字幕、音乐与音效',content:'先声音后画面的剪辑方法；镜头长短和叙事节奏；对白、环境音、音效和音乐的层级；字幕断句；关键词强调；片头、转场和结尾设计；竖屏适配',practice:'将已有镜头组装成完整粗剪，补充字幕、音乐和基础音效',output:'AI漫剧粗剪版1.0'}
    ]
  },
  {
    name:'互动项目',range:'15—16',lessons:[
      {number:15,module:'互动设计',title:'视频交互游戏：分支剧情与玩法设计',content:'线性视频与互动视频的区别；剧情节点、选择节点、分支、汇合与结局；如何把AI漫剧改造成互动故事；有效选择与无效选择；选择结果如何反馈；控制分支数量；基础状态变量，如好感度、生命值或线索值；视频节点编号和素材管理',practice:'将自己的AI漫剧主线改造成“开场—选择一—分支剧情—选择二—两个结局”的互动结构，绘制剧情流程，确定每个节点需要的视频素材',output:'互动游戏剧情脚本大纲'},
      {number:16,module:'成果展示',title:'视频交互游戏：搭建、测试与发布',content:'视频节点导入；选择按钮和点击区域；节点跳转与结局触发；简单变量与条件判断；开始界面、选择界面、结局界面和重新开始；不同分支之间的画面与声音衔接；路径测试、死循环、错误跳转和素材缺失检查；作品展示与复盘',practice:'使用可视化或无代码工具，将准备好的视频片段组装成可点击游玩的互动视频；学生互换作品，分别测试全部剧情路径并现场修复问题',output:'可游玩的AI视频交互游戏'}
    ]
  }
];

const sectionNav=document.getElementById('course-sections');
const lessonsRoot=document.getElementById('lessons-root');

courseGroups.forEach((group,groupIndex)=>{
  const sectionId=`comic-group-${groupIndex+1}`;
  const navLink=document.createElement('a');
  navLink.href=`#${sectionId}`;
  navLink.innerHTML=`<span>${String(groupIndex+1).padStart(2,'0')}</span>${group.name}<small>${group.range}</small>`;
  sectionNav.append(navLink);

  const section=document.createElement('section');
  section.className='course-group';
  section.id=sectionId;
  const heading=document.createElement('header');
  heading.className='group-heading';
  heading.innerHTML=`<h3>${group.name}</h3><span>第${group.range}课 / ${group.lessons.length}课时</span>`;
  section.append(heading);

  group.lessons.forEach((item)=>{
    const details=document.createElement('details');
    details.className='lesson';
    details.id=`comic-lesson-${item.number}`;
    if(item.number===1)details.open=true;

    const summary=document.createElement('summary');
    summary.innerHTML=`<span class="lesson-number">${String(item.number).padStart(2,'0')}</span><span class="lesson-heading"><small>${item.module}</small><strong>${item.title}</strong></span><span class="duration">45分钟</span><span class="plus" aria-hidden="true"></span>`;

    const body=document.createElement('div');
    body.className='lesson-body';
    const content=document.createElement('div');
    const contentTitle=document.createElement('h4');
    contentTitle.textContent='核心教学内容';
    const list=document.createElement('ul');
    item.content.split('；').forEach(text=>{
      const li=document.createElement('li');
      li.textContent=text;
      list.append(li);
    });
    content.append(contentTitle,list);

    const practice=document.createElement('div');
    practice.className='practice';
    const practiceTitle=document.createElement('h4');
    practiceTitle.textContent='课堂实操';
    const practiceText=document.createElement('p');
    practiceText.textContent=item.practice;
    const output=document.createElement('div');
    output.className='output';
    const outputTitle=document.createElement('h4');
    outputTitle.textContent='当堂产出';
    const outputText=document.createElement('p');
    outputText.textContent=item.output;
    output.append(outputTitle,outputText);
    practice.append(practiceTitle,practiceText,output);
    body.append(content,practice);
    details.append(summary,body);
    section.append(details);
  });
  lessonsRoot.append(section);
});

const opLessonBody=document.querySelector('#comic-lesson-12 .lesson-body');
if(opLessonBody){
  const opTimeline=[
    {time:'0.0—0.9s',title:'身份钩子',beat:'眼睛、剑柄与绑腕三组极短特写，先建立角色和武器。',camera:'连续急推，最后穿入城门广场。',pack:'冷蓝校准线、局部微波点与短促反相闪帧。',next:'轴承圆孔放大，作为进入世界观的遮罩。'},
    {time:'0.9—2.0s',title:'高速扫描',beat:'低机位穿越桥墩和废铁梁，再甩向四周残响体。',camera:'18mm强视差前冲，快速完成空间交代。',pack:'扫描框与细电路只服务信息识别，不盖过主体。',next:'六角框闭合成螺栓头，在重拍上打开。'},
    {time:'2.0—3.8s',title:'剑势蓄力',beat:'双手从自然垂落到握住剑柄和剑身，气流沿剑刃积聚。',camera:'正面中近景小幅绕行后稳定推进。',pack:'后层大字、斜切线与渐隐波点跟随能量增强。',next:'3.8秒能量爆发，剑气掠过镜头完成转场。'},
    {time:'3.8—5.2s',title:'拔剑爆发',beat:'右手拔剑、身体拧腰、双手锁定，左脚踏出稳定重心。',camera:'从怪物肩部缝隙钻出，靠近角色右侧。',pack:'文字沿导轨滑入，角色与剑身形成前中后层。',next:'剑尖橙光正对镜头并吞没画面。'},
    {time:'5.2—6.0s',title:'剪影转场',beat:'人物侧身压低重心，长剑后摆，为冲刺做准备。',camera:'摄影机高速横移，纹样从相反方向掠过。',pack:'黑橙剪影、祥云纹与龙纹形成三层遮挡。',next:'前脚踏出的冲击形状撕开下一镜。'},
    {time:'6.0—7.3s',title:'三步爆发冲刺',beat:'三步必须有不同步态：前倾拖剑、跨梁换腿、蹬伸扬剑。',camera:'贴地倒退追拍，再下沉并甩至侧后方仰拍。',pack:'仅保留三条渐隐速度线与局部尾迹。',next:'断裂高架扫过前景，自然接入起跳。'},
    {time:'7.3—8.5s',title:'高跳与剑势启动',beat:'压缩、蹬直、腾空、收膝、扭腰与甩剑连续发生。',camera:'从起跳点正下方垂直仰望，并沿上升轨迹绕行。',pack:'半圆转速表切线与剑身气流同步增强。',next:'摄影机钻入剑气核心，在8.5秒冲出。'},
    {time:'8.5—10.7s',title:'空中机动斩击',beat:'横扫、借反震转体、第二次斜斩与最终扫击构成高潮。',camera:'主观视角、贴剑跟随与极端低角度连续切换。',pack:'刻度、压力表、切线和少量微波点围绕动作中心。',next:'10.2秒橙黑冲击帧后迅速抽空，为落地留空间。'},
    {time:'10.7—11.8s',title:'高速坠落与落地',beat:'左脚接触、膝盖压缩、右脚滑步、身体旋转、左手触地。',camera:'从残骸内部仰拍，随角色急坠后甩到贴地侧前方。',pack:'环形烟尘、地面刻线、火星与碎石体现冲击。',next:'残骸贴近镜头形成黑色遮挡。'},
    {time:'11.8—12.5s',title:'动态收束',beat:'左手撑地起身，髋部抬起，长剑回到右侧斜下方。',camera:'低位绕到三分之二正面后快速减速。',pack:'气流转静止，橙光变弱，细线从末端分段收回。',next:'速度归零，进入稳定英雄构图。'},
    {time:'12.5—15.0s',title:'OP定版',beat:'人物右侧站定，剑尖斜向前下方，目光直视镜头。',camera:'构图稳定，只保留3%以内慢推与细微衣发运动。',pack:'标题、祥云、龙纹、链条和建筑剪影分层锁定。',next:'15.0秒硬切黑场，完成记忆点。'}
  ];
  const opTimelineMarkup=opTimeline.map((item,index)=>
    `<details class="op-shot"${index===0?' open':''}><summary><span class="op-time">${item.time}</span><strong>${item.title}</strong><span class="op-shot-plus" aria-hidden="true"></span></summary><div class="op-shot-grid"><p><b>人物动作</b>${item.beat}</p><p><b>摄影机</b>${item.camera}</p><p><b>视觉包装</b>${item.pack}</p><p><b>转场连接</b>${item.next}</p></div></details>`
  ).join('');

  opLessonBody.classList.add('op-lesson-body');
  opLessonBody.innerHTML=`
    <section class="op-feature" aria-labelledby="op-feature-title">
      <img src="op-frame-03.jpg" alt="黑衣持巨剑角色站在东方灾后巨城前的热血OP定版画面">
      <div class="op-feature-shade"></div>
      <div class="op-feature-copy">
        <p class="op-kicker">LESSON 12 · 15 SECOND MINI OP</p>
        <h4 id="op-feature-title">风格化热血<br>Mini OP 制作</h4>
        <p>从日漫OP的视听语法出发，把世界观、角色资产、动作表演、摄影机和音乐卡点压缩进一条15秒时间轴。</p>
        <div class="op-specs"><span><b>15s</b>时长</span><span><b>16:9</b>画幅</span><span><b>24fps</b>帧率</span><span><b>1人</b>主角</span></div>
      </div>
    </section>

    <section class="op-block" aria-labelledby="op-film-title">
      <div class="op-block-title"><span>成片</span><div><h4 id="op-film-title">先看完整样片，再沿时间轴倒推</h4><p>观察角色如何从身份钩子进入蓄力、冲刺、空中斩击与定版收束。</p></div></div>
      <div class="op-video-card">
        <div class="op-video-frame"><video id="op-showcase-video" controls preload="metadata" playsinline poster="op-frame-03.jpg" aria-label="15秒风格化热血Mini OP示例成片"><source src="mini-op-demo.mp4" type="video/mp4">当前浏览器不支持视频播放，可<a href="mini-op-demo.mp4">下载示例视频</a>查看。</video><span>00:15</span></div>
        <div class="op-video-notes"><p class="op-label">CASE FILM · 24 FPS</p><h5>天裂之后</h5><p>不是逐帧模仿，而是识别每一段承担的叙事任务：先让观众记住人，再让动作逐级升级，最后用稳定定版收住高潮。</p><ul><li>场景：东方灾后巨城保持统一</li><li>动作：身体、武器与运镜同时变化</li><li>节奏：强弱交替，不连续铺满特效</li></ul></div>
      </div>
    </section>

    <section class="op-block" aria-labelledby="op-class-title">
      <div class="op-block-title"><span>45 MIN</span><div><h4 id="op-class-title">课堂推进表</h4><p>一节课完成认知、拆解、设计和落地检查。</p></div></div>
      <ol class="op-class-flow"><li><b>0—6′</b><span>看片定标，理解OP与PV、ED、IN的区别</span></li><li><b>6—14′</b><span>建立世界观，明确角色、场景与敌人资产</span></li><li><b>14—22′</b><span>拆开提示词七大模块，识别固定项与镜头变量</span></li><li><b>22—34′</b><span>按15秒时间轴逐段设计人物、运镜、包装与转场</span></li><li><b>34—42′</b><span>用动作公式重写一个空中斩击镜头</span></li><li><b>42—45′</b><span>按连续性清单检查并提交方案</span></li></ol>
    </section>

    <section class="op-block" aria-labelledby="op-grammar-title">
      <div class="op-block-title"><span>01</span><div><h4 id="op-grammar-title">先认识日漫OP的画面语法</h4><p>OP是每集开头的主题动画短片，用歌曲、角色、世界观和伏笔快速抓住观众。</p></div></div>
      <div class="op-term-strip"><span><b>OP</b>片头曲 / 开场曲</span><span><b>ED</b>片尾曲</span><span><b>IN</b>剧情插入曲</span><span><b>OVA</b>番外录影动画</span><span><b>PV</b>播出前宣传短片</span></div>
      <div class="op-traits"><article><b>01</b><h5>快切与卡点</h5><p>短镜头密集，主重拍明确切镜，连续动作穿过次级节拍。</p></article><article><b>02</b><h5>预告与伏笔</h5><p>展示角色、阵营和危机，但不把完整故事一次讲完。</p></article><article><b>03</b><h5>经典镜头组合</h5><p>人物特写、大远景、奔跑打斗与定格名场面交替出现。</p></article><article><b>04</b><h5>意象与符号</h5><p>花瓣、碎片、鸟、水、光影等画面暗示人物命运与矛盾。</p></article><article><b>05</b><h5>色彩与光影</h5><p>冷暖、明暗与饱和度随歌曲情绪改变，形成段落差异。</p></article><article><b>06</b><h5>多样转场</h5><p>闪白、模糊、撕裂、光斑和前景遮挡承担镜头连接。</p></article><article><b>07</b><h5>跟随歌曲结构</h5><p>主歌铺世界观，副歌提高动作密度并释放视觉高潮。</p></article></div>
    </section>

    <section class="op-block" aria-labelledby="op-world-title">
      <div class="op-block-title"><span>02</span><div><h4 id="op-world-title">世界观与资产准备</h4><p>先让角色、城市和敌人属于同一个世界，再追求动作效果。</p></div></div>
      <div class="op-world-lead"><div><p class="op-label">WORLD BUILDING</p><h5>天裂之后的东方巨城</h5><p>近未来，空间异常“天裂”释放“墟质”，把人类记忆、古代器物与现代城市设施重新拼合。东方巨城在古代城址上建造“镇界枢纽”，由“巡界司”进入封锁区清除墟质生命并关闭裂隙。</p></div><ul><li>古城墙成为能源防线</li><li>天文仪器升级为空间观测阵列</li><li>寺庙、牌楼与高架轨道彼此嵌合</li><li>符箓般线路承担城市能源回路</li><li>整体是冷峻、克制的东方灾后都市</li></ul></div>
      <div class="op-gallery"><figure><img src="op-frame-01.jpg" alt="古城门、高架环线和残响体构成的东方灾后巨城场景"><figcaption><b>场景基准</b><span>城门中轴 · 环形高架 · 暗云山脉</span></figcaption></figure><figure><img src="op-frame-02.jpg" alt="角色持紫色剑气冲向墟质怪物的动作画面"><figcaption><b>动作基准</b><span>强透视 · 三步冲刺 · 剑气轨迹</span></figcaption></figure><figure><img src="op-frame-03.jpg" alt="黑衣主角与超大型宽刃长剑的定版构图"><figcaption><b>角色定版</b><span>同一张脸 · 同一服装 · 同一武器</span></figcaption></figure></div>
      <div class="op-asset-check"><span><b>角色资产</b>正面 / 侧面 / 背面 / 全身战斗姿态</span><span><b>场景资产</b>城门广场 / 高空城市 / 中轴仰视</span><span><b>敌人资产</b>统一结构、尺度与核心发光位置</span><span><b>验收原则</b>脸、服装、武器、空间关系先锁定</span></div>
    </section>

    <section class="op-block" aria-labelledby="op-prompt-title">
      <div class="op-block-title"><span>03</span><div><h4 id="op-prompt-title">完整提示词的七大模块</h4><p>用固定信息保证统一，用分段信息控制节奏。</p></div></div>
      <div class="op-prompt-map"><span><i>01</i><b>核心定位</b><small>时长、画幅、规格、作品类型</small></span><span><i>02</i><b>角色与武器</b><small>脸、服装、手部、武器形态</small></span><span><i>03</i><b>人物与场景参考</b><small>参考图角色、城门与敌人资产</small></span><span><i>04</i><b>整体视听风格</b><small>赛璐璐、强透视、色彩和运镜</small></span><span><i>05</i><b>15秒逐段分镜</b><small>动作、摄影机、包装和接镜</small></span><span><i>06</i><b>音乐与卡点</b><small>BPM、主重拍、高潮与抽空</small></span><span><i>07</i><b>避免项</b><small>一致性、动作连续性和画面禁区</small></span></div>
      <blockquote class="op-question"><b>每一段都回答四个问题</b><span>人物做了什么？</span><span>摄影机怎么运动？</span><span>画面包装出现了什么？</span><span>这一段怎样进入下一段？</span></blockquote>
    </section>

    <section class="op-block" aria-labelledby="op-timeline-title">
      <div class="op-block-title"><span>04</span><div><h4 id="op-timeline-title">15秒逐段分镜</h4><p>点击每一段右侧加号，查看动作、摄影机、包装和转场的协同关系。</p></div></div>
      <div class="op-timeline">${opTimelineMarkup}</div>
    </section>

    <section class="op-block op-action" aria-labelledby="op-action-title">
      <div class="op-block-title"><span>05</span><div><h4 id="op-action-title">动作戏统一拆解公式</h4><p>不要只写“角色挥剑”，要写出身体如何完成这次挥剑。</p></div></div>
      <div class="op-formula" aria-label="动作戏拆解公式"><span>起始姿势</span><i>→</i><span>发力部位</span><i>→</i><span>身体重心</span><i>→</i><span>武器轨迹</span><i>→</i><span>服装与环境响应</span><i>→</i><span>结束姿势</span></div>
      <div class="op-example"><p class="op-label">EXAMPLE · 空中斩击</p><p>空中收膝准备旋转 → 腰部先扭转、右肩随后发力 → 双腿由收膝变为前后展开 → 长剑从右上向左下横扫 → 剑气、衣摆、发丝与怪物结构同时响应 → 借反震继续转体，连接下一次斜斩。</p></div>
    </section>

    <section class="op-delivery">
      <div><h4>课堂实操</h4><p>以自己的角色和世界观为基础，完成一份15秒OP时间轴；任选一个动作镜头，使用六步公式写清身体、武器、环境与摄影机的连续变化。</p></div>
      <div class="output"><h4>当堂产出</h4><p>15秒风格化热血战斗OP + 世界观/资产清单 + 逐段分镜表</p></div>
      <a href="https://my.feishu.cn/wiki/CXMWw4mL8ig6OqkUVjWc689Snvb" target="_blank" rel="noreferrer">查看原始飞书课程资料</a>
    </section>`;

  const opVideo=document.getElementById('op-showcase-video');
  if(opVideo){
    const opVideoObserver=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting)opVideo.pause();
    },{threshold:.08});
    opVideoObserver.observe(opVideo);
  }
}

const lessons=[...document.querySelectorAll('.lesson')];
const expandButton=document.getElementById('expand');

function syncExpandButton(){
  const allOpen=lessons.every(item=>item.open);
  expandButton.textContent=allOpen?'收起全部课程 −':'展开全部课程 ＋';
  expandButton.setAttribute('aria-expanded',String(allOpen));
}

expandButton.addEventListener('click',()=>{
  const shouldOpen=!lessons.every(item=>item.open);
  lessons.forEach(item=>item.open=shouldOpen);
  syncExpandButton();
});
lessons.forEach(item=>item.addEventListener('toggle',syncExpandButton));

const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      sectionNav.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`));
    }
  });
},{rootMargin:'-5% 0px -65% 0px'});
document.querySelectorAll('.course-group').forEach(section=>sectionObserver.observe(section));

let printState=[];
window.addEventListener('beforeprint',()=>{
  printState=lessons.map(item=>item.open);
  lessons.forEach(item=>item.open=true);
});
window.addEventListener('afterprint',()=>lessons.forEach((item,index)=>item.open=printState[index]));
