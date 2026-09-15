const lessons=[...document.querySelectorAll('.lesson')];
const toggle=document.getElementById('expand');
toggle.addEventListener('click',()=>{const open=!lessons.every(x=>x.open);lessons.forEach(x=>x.open=open);sync();});
function sync(){const all=lessons.every(x=>x.open);toggle.textContent=all?'收起全部课程 −':'展开全部课程 ＋';toggle.setAttribute('aria-expanded',String(all));}
lessons.forEach(x=>x.addEventListener('toggle',sync));
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){document.querySelectorAll('aside nav a').forEach(a=>{a.classList.toggle('active',a.hash==='#'+entry.target.id);});}}},{rootMargin:'-5% 0px -65% 0px'});
document.querySelectorAll('.course-group').forEach(x=>observer.observe(x));
let previous=[];window.addEventListener('beforeprint',()=>{previous=lessons.map(x=>x.open);lessons.forEach(x=>x.open=true)});window.addEventListener('afterprint',()=>lessons.forEach((x,i)=>x.open=previous[i]));

const mvLessonBody=document.querySelector('#lesson-13 .lesson-body');
if(mvLessonBody){
  mvLessonBody.classList.add('mv-lesson-body');
  mvLessonBody.innerHTML=
    '<section class="mv-feature" aria-labelledby="mv-feature-title">'+
      '<div class="mv-scene">'+
        '<img class="mv-stage" src="mv-stage.png" alt="朱红宫阙、金色斗拱、圆形水墨屏和延伸台构成的国风演唱会舞台">'+
        '<figure class="mv-singer"><img src="mv-singer.png" alt="赤金、黛青与象牙白刺绣礼服的国风数字人歌手参考图"><figcaption>人物参考 · 统一脸型、发饰与礼服</figcaption></figure>'+
      '</div>'+
      '<div class="mv-feature-copy">'+
        '<p class="mv-kicker">第 13 课 · 综合实操</p>'+
        '<h4 id="mv-feature-title">用一条音乐时间轴，锁住人物、舞台与表演连续性</h4>'+
        '<p>课堂内完成 20—30 秒可交付片段；4 分钟完整方案拆为 16 个 15 秒镜头包，作为课后进阶练习。</p>'+
        '<div class="mv-goal-grid"><span><b>人物</b>脸型、发饰、礼服不漂移</span><span><b>场景</b>宫阙、圆屏、延伸台保持一致</span><span><b>声音</b>原曲切片 1:1 复用</span><span><b>镜头</b>每段 3 个镜头随能量变化</span></div>'+
      '</div>'+
    '</section>'+
    '<section class="mv-block mv-class-plan">'+
      '<div class="mv-block-title"><span>45 MIN</span><div><h4>课堂推进表</h4><p>先完成最小成片，再理解完整长片工作流。</p></div></div>'+
      '<ol class="mv-steps"><li><b>0—5′</b><span>看片定标：识别人物、舞台、音频三类固定资产</span></li><li><b>5—12′</b><span>选择 20—30 秒歌曲，标出主歌、副歌与情绪拐点</span></li><li><b>12—20′</b><span>生成歌手与宫阙舞台参考图，建立连续性清单</span></li><li><b>20—35′</b><span>切成 2 个 15 秒片段，生成带原始音频的视频画面</span></li><li><b>35—43′</b><span>拼接、检查口型与人物漂移，修正明显跳变</span></li><li><b>43—45′</b><span>导出并提交 20—30 秒国风数字人 MV</span></li></ol>'+
    '</section>'+
    '<section class="mv-block mv-assets">'+
      '<div class="mv-block-title"><span>01</span><div><h4>模型与素材资产</h4><p>先固定声音、人物和舞台，再进入视频生成。</p></div></div>'+
      '<div class="mv-asset-grid">'+
        '<article class="mv-music-card"><img src="mv-music3.png" alt="MiniMax Music 3 模型视觉"><div><h5>MiniMax Music 3</h5><p>开放权重音乐模型，可根据歌词与音乐描述生成最长约 5 分钟的完整歌曲，支持多语言演唱与段落控制，输出 32kHz、16-bit 立体声 WAV。</p><ul><li>适合完整歌曲、本地部署与批量创作</li><li>高配约需 24GB 显存；卸载方式可降至约 8GB，但速度会降低</li><li>BPM、调性与编曲控制仍需人工试听校正</li></ul></div></article>'+
        '<article class="mv-prompt-card"><h5>人物资产提示词</h5><p>中国风美女，瓜子脸，国风古典审美；身着赤金、黛青配色的华丽刺绣礼服，搭配金玉步摇与宫苑月夜背景。</p><h5>固定连续性</h5><p><b>Subject 1</b>：朱红金瓦宫阙舞台、圆形水墨屏、对称楼梯与延伸台。<br><b>Subject 2</b>：同一歌手脸型、高髻、凤凰金饰、玉珠流苏与刺绣礼服。<br><b>Audio 1</b>：对应 15 秒原曲切片，作为唯一声音与表演节奏来源。</p></article>'+
      '</div>'+
    '</section>'+
    '<section class="mv-block mv-workflow">'+
      '<div class="mv-block-title"><span>02</span><div><h4>制作工作流</h4><p>歌曲生成 → 结构划分 → 资产生成 → 分段视频 → 拼接检查。</p></div></div>'+
      '<div class="mv-links">'+
        '<a href="https://github.com/MiniMax-AI/MiniMax-Music3" target="_blank" rel="noreferrer"><b>音乐模型</b><span>MiniMax Music 3 开源仓库</span></a>'+
        '<a href="https://www.runninghub.cn/workflow/2099332465134489601?source=workspace" target="_blank" rel="noreferrer"><b>在线歌曲工作流</b><span>RunningHub</span></a>'+
        '<a href="https://www.compshare.cn/images/CJBFfvl2Nbe7" target="_blank" rel="noreferrer"><b>云端音乐镜像</b><span>MiniMax Music 3</span></a>'+
        '<a href="https://www.compshare.cn/video-studio" target="_blank" rel="noreferrer"><b>示例视频生成</b><span>MiniMax H3 Video Studio</span></a>'+
      '</div>'+
      '<div class="mv-model-wrap"><table class="mv-model-table"><thead><tr><th>视频模型</th><th>主要优势</th><th>更适合</th></tr></thead><tbody><tr><td>MiniMax H3</td><td>中文理解好、原生音频、性价比高</td><td>中文短片、电商视频</td></tr><tr><td>Seedance 2.5</td><td>多素材参考强，可生成较长视频</td><td>漫剧、多镜头叙事</td></tr><tr><td>Kling 3.0</td><td>人物一致性与动作控制较强</td><td>剧情短片、人物视频</td></tr><tr><td>Veo 3.1</td><td>画质、物理效果与原生音频优秀</td><td>电影感、广告大片</td></tr><tr><td>Wan 3.0</td><td>支持长视频、原生音频与私有部署</td><td>批量生产、工作流部署</td></tr><tr><td>Runway Gen-4.5</td><td>运镜稳定、专业编辑工具完善</td><td>广告、影视制作</td></tr></tbody></table></div>'+
    '</section>'+
    '<section class="mv-block mv-timeline">'+
      '<div class="mv-block-title"><span>03</span><div><h4>4 分钟进阶分镜包</h4><p>16 × 15 秒。点击每段右侧加号，查看可直接复制的完整 Ref2VA 提示词。</p></div></div>'+
      '<div id="mv-prompt-list" class="mv-prompt-list" aria-live="polite"><p class="mv-loading">正在载入完整提示词…</p></div>'+
    '</section>'+
    '<section class="mv-block mv-delivery">'+
      '<div><h4>课堂实操</h4><p>学生选择连续的 2 个音频切片，完成 20—30 秒人物演唱、场景连续、音画同步的国风数字人 MV。</p></div>'+
      '<div class="output"><h4>当堂产出</h4><p>20—30 秒国风数字人 MV 成片 + 人物/场景参考资产 + 2 段生成提示词</p></div>'+
      '<a class="mv-source" href="https://my.feishu.cn/docx/MxczdadPhoHCd5x80znc3Y8SnRm" target="_blank" rel="noreferrer">查看原始飞书课程资料</a>'+
    '</section>';

  const promptList=document.getElementById('mv-prompt-list');
  fetch('mv-prompts.json')
    .then(response=>{if(!response.ok)throw new Error('prompt data unavailable');return response.json();})
    .then(data=>{
      promptList.textContent='';
      data.prompts.forEach((item,index)=>{
        const prompt=item.prompt
          .replace(/[\u200b\u200c\u200d\ufeff]/g,'')
          .replace(/^\s*代码块\s*Plain Text\s*自动换行\s*复制\s*/,'')
          .trim();
        const card=document.createElement('details');
        card.className='mv-shot-card';
        if(index===0)card.open=true;
        const summary=document.createElement('summary');
        const title=document.createElement('span');
        title.className='mv-shot-title';
        title.textContent=item.title;
        const plus=document.createElement('span');
        plus.className='mv-shot-plus';
        plus.setAttribute('aria-hidden','true');
        summary.append(title,plus);
        const content=document.createElement('div');
        content.className='mv-shot-content';
        const copy=document.createElement('button');
        copy.className='mv-copy';
        copy.type='button';
        copy.textContent='复制完整提示词';
        copy.addEventListener('click',()=>{
          navigator.clipboard.writeText(prompt).then(()=>{
            copy.textContent='已复制';
            setTimeout(()=>copy.textContent='复制完整提示词',1500);
          });
        });
        const pre=document.createElement('pre');
        pre.textContent=prompt;
        content.append(copy,pre);
        card.append(summary,content);
        promptList.append(card);
      });
    })
    .catch(()=>{
      promptList.innerHTML='<p class="mv-loading">完整提示词载入失败，请刷新页面后重试。</p>';
    });
}
