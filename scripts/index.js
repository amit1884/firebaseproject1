// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});


//accordian data

const guidelist=document.querySelector('.guides');

const setupGuides=(data)=>{
 
  let html='';
  data.forEach(doc=>{
    const guide =doc.data();
    // console.log(guide);
    const li =`
    
    <li>
        <div class="collapsible-header grey lighten-4">${guide.title}</div>
        <div class="collapsible-body white">${guide.content}</div>
      </li>
    
    `;
    html+=li;
  });
  guidelist.innerHTML=html;
}