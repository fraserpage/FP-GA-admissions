
    /* Silly question and answer */
    const response = document.getElementById('response');
    
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function () {
        if (button.innerText == "Good, thanks!"){
            response.innerText = "Glad to hear it!";
        }
        else{
            response.innerText = "Sorry to hear that!";
        }
      });
    });
    
    /*Accordions*/
    
    /*On load, add 'active' class to accordion*/
    document.querySelectorAll('dl').forEach(accordion =>{
      accordion.classList.add('active');
    });
    
    /*Add 'closed' to all 'dts'. Add tabindex="0" to 'dt's*/
    document.querySelectorAll('dl.accordion dt').forEach(dt =>{
      dt.tabIndex = 0;
      dt.ariaExpanded = false;
      dt.classList.add('closed');
      dt.addEventListener('click', function(){
        toggleAccordion(this);
      });
      dt.addEventListener('keydown', function(event){
        if (event.code === 'Space') {
          event.preventDefault();
          toggleAccordion(this);
        }
      })
    });
    
    function toggleAccordion(dt){
      
      let dd = dt.nextElementSibling;
      
      //Open it
      if (dt.classList.contains('closed')){
        dt.classList.remove('closed');
        dt.classList.add('open');
        dt.ariaExpanded = true;
        //slide down dd (animation is css transition)
        dd.style.height = "auto";
        dd.style.height = "0px";
        setTimeout(() => {
          dd.style.height = dd.clientHeight + "px";
        }, 0); 
        dd.addEventListener('transitionend', () => {
          dd.style.height = "auto";
        }, {once: true})
      }
      //close it
      else if (dt.classList.contains('open')){
        //slide up dd 
        dd.style.height = dd.clientHeight + "px";
        setTimeout(() => {
          dd.style.height = "0px";
        }, 0); 
        dt.ariaExpanded = false;
        /** Change the classes when the animation ends. */
        dd.addEventListener('transitionend', () => {
          dt.classList.add('closed');
          dt.classList.remove('open');
        }, {once: true})
      }
    }