const previews={
weekly:{kicker:'01 / YOUR TIME',title:'See the whole week.',text:'Keep commitments, your next useful step and dinner in one view. Space below is yours for priorities, personal time or support.',alt:'Week at a glance: seven daily rows with fixed plans, next step and dinner columns',caption:'Week at a glance · Printable edition'},
reset:{kicker:'02 / START SMALL',title:'Decide what matters.',text:'Gather loose ends before filling the calendar. Choose three priorities, spot the busy parts and decide what to share, simplify or postpone.',alt:'Weekly reset page with priorities, fixed commitments, support and postponement sections',caption:'Weekly reset · Printable edition'},
meals:{kicker:'03 / EVERYDAY FOOD',title:'Give dinner a plan B.',text:'Check what is already in the kitchen, choose realistic dinners and note who handles the prep. Keep an easy backup in view.',alt:'Meal planner with use-first inventory, seven dinner rows, prep owners and backup meals',caption:'Meals for the week · Printable edition'},
ownership:{kicker:'04 / FAMILY & HOME',title:'Share the whole task.',text:'Make the planning and follow-through visible. Agree on the owner, what done looks like and when a check-in would actually help.',alt:'Shared task table with whole task, owner, done looks like and check-in columns',caption:'Share the whole task · Printable edition'},
'tablet-index':{kicker:'05 / TAP & PLAN',title:'Find your next page.',text:'Open the month, week or toolkit directories from the home page. Navigation buttons along the bottom bring the key sections within reach.',alt:'Tablet home page with linked Months, Weeks, Your toolkit and Start here panels',caption:'Home index · Linked tablet edition'}
};
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.page,p=previews[key];
 document.querySelectorAll('[data-page]').forEach(b=>{const active=b===button;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));});
 document.getElementById('preview-kicker').textContent=p.kicker;
 document.getElementById('preview-title').textContent=p.title;
 document.getElementById('preview-text').textContent=p.text;
 document.getElementById('preview-caption').textContent=p.caption;
 const img=document.getElementById('preview-image');img.src=key+'.png';img.alt=p.alt;
}));
