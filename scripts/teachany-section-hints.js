// teachany-section-hints.js - 段落提示模块（小学版）
(function(){
  function initHints(){
    document.querySelectorAll('[data-tsh]').forEach(el=>{
      if(el.dataset.hintDone) return;
      el.dataset.hintDone='1';
      const hint = el.dataset.tsh;
      if(!hint) return;
      // 创建提示气泡
      const bubble = document.createElement('div');
      bubble.className = 'section-hint';
      bubble.textContent = '💡 ' + hint;
      bubble.style.cssText = 'position:absolute;background:#132240;color:#e8f4ff;border:1px solid rgba(96,184,255,.25);border-radius:10px;padding:8px 14px;font-size:13px;z-index:200;max-width:280px;box-shadow:0 8px 24px rgba(0,0,0,.3);pointer-events:none;opacity:0;transition:opacity .25s;';
      el.style.position = 'relative';
      el.appendChild(bubble);
      el.addEventListener('mouseenter', ()=>{ bubble.style.opacity='1'; bubble.style.pointerEvents='auto'; });
      el.addEventListener('mouseleave', ()=>{ bubble.style.opacity='0'; bubble.style.pointerEvents='none'; });
      // 移动端：点击显示
      el.addEventListener('click', e=>{
        e.stopPropagation();
        document.querySelectorAll('.section-hint').forEach(b=>{ if(b!==bubble) b.style.opacity='0'; });
        bubble.style.opacity = bubble.style.opacity==='1' ? '0' : '1';
      });
    });
    // 点击页面其他地方关闭气泡
    document.addEventListener('click', ()=>{
      document.querySelectorAll('.section-hint').forEach(b=>b.style.opacity='0');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initHints);
  else initHints();
})();
