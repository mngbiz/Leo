'use strict';
const COMPANY_PHONE='+15103790361';
const menuButton=document.getElementById('nav-toggle');
const mobileMenu=document.getElementById('mobile-menu');
const menuIcon=document.querySelector('#nav-toggle-icon use');
const quoteForm=document.getElementById('quote-form');
const smsDialog=document.getElementById('sms-dialog');
const smsPreview=document.getElementById('sms-preview');
const smsLaunch=document.getElementById('sms-launch');
const copyButton=document.getElementById('copy-message');
const copyStatus=document.getElementById('copy-status');
function setMenuOpen(open){
  if(!menuButton||!mobileMenu)return;
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  mobileMenu.hidden=!open;
  if(menuIcon)menuIcon.setAttribute('href',open?'#i-x':'#i-menu');
}
if(menuButton && mobileMenu){
  menuButton.addEventListener('click',()=>setMenuOpen(menuButton.getAttribute('aria-expanded')!=='true'));
  mobileMenu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true')setMenuOpen(false)});
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
if(quoteForm && smsDialog && smsPreview && smsLaunch){
  quoteForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!quoteForm.reportValidity())return;
    const data=new FormData(quoteForm);
    const val=key=>String(data.get(key)||'').trim();
    const message=[
      'Hi Leo GN Construction! I would like a FREE ESTIMATE.','',
      'Name: '+val('name'),
      'Phone: '+val('phone'),
      'Project: '+val('project'),
      'City: '+val('city'),
      'Timeframe: '+val('timing'),
      '','Project details:',val('details')
    ].join('\n');
    smsPreview.value=message;
    smsLaunch.href='sms:'+COMPANY_PHONE+'?body='+encodeURIComponent(message);
    if(copyStatus)copyStatus.textContent='On a computer without a texting app? Copy the message and text it to 510-379-0361.';
    if(typeof smsDialog.showModal==='function')smsDialog.showModal();
    else window.location.href=smsLaunch.href;
  });
}
if(copyButton&&smsPreview){
  copyButton.addEventListener('click',async()=>{
    try{
      if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(smsPreview.value);
      else{
        smsPreview.focus();smsPreview.select();
        if(!document.execCommand('copy'))throw new Error('Copy unavailable');
        smsPreview.setSelectionRange(0,0);
      }
      if(copyStatus)copyStatus.textContent='Message copied! Text it to 510-379-0361.';
      copyButton.textContent='Copied!';
      setTimeout(()=>{copyButton.textContent='Copy message'},2200);
    }catch{if(copyStatus)copyStatus.textContent='Select and copy the message manually, then text it to 510-379-0361.'}
  });
}
const dialogClose=document.getElementById('dialog-close');
if(dialogClose&&smsDialog)dialogClose.addEventListener('click',()=>smsDialog.close());
if(smsDialog)smsDialog.addEventListener('click',event=>{if(event.target===smsDialog)smsDialog.close()});
document.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.style.opacity='0'}));
