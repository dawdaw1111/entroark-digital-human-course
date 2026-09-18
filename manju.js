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
      {number:12,module:'风格化制作',title:'风格化热血OP制作',content:'风格化定制热血日漫风格主角战斗OP风格制作',practice:'完成一段15秒战斗OP',output:'日漫战斗OP'},
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
