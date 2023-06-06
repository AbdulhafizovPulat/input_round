const list = document.querySelector("#move")

list.innerHTML = `
            <div class="address">
              <div id=1 class="round active_round">1</div>
              <span id=1 class="line"></span>
              <div id=2 class="round">2</div>
              <span id=2 class="line"></span>
              <div id=3 class="round">3</div>
              <span id=3 class="line"></span>
              <div id=4 class="round">4</div>
            </div>
            <div class="buttons">
              <button class="btn" id="prev">Prev</button>
              <button class="btn active" id="next">Next</button>
            </div>  
`;

const prev = list.querySelector("#prev")
const next = list.querySelector("#next")

const rounds = list.querySelectorAll(".round")
const lines = list.querySelectorAll("span")

next.addEventListener("click", (evt) => {
   
    for (let i = 0; i < rounds.length; i++) {
      const element = rounds[i];
      if (element.className.includes("active_round")){
        prev.className += " active"
        continue;
      }else {
        if (element.id == 4){
          next.className = "btn"
        }    
          element.className += " active_round";
          break;
      }
    }
    for (let i = 0; i < lines.length; i++) {
      const element = lines[i];
      if (element.className.includes("active")){
        prev.className += " active"
        continue;
      }else {
        if (element.id == 3){
          next.className = "btn"
        }    
          element.className += " active";
          break;
      }
    }
})


prev.addEventListener("click", (evt) => { 
    for (let i = Number(rounds.length)-1; i > 0; --i) {
      const element = rounds[i];
      if (element.className.includes("active_round")){
        element.className = "round";
        next.className += " active";
        break;
      }else{
        if(element.id == 3){
          prev.className = "btn";
        }
        continue;
      }
    }

    for (let i = Number(lines.length)-1; i >= 0; --i) {
      const element = lines[i];
      if (element.className.includes("active")){
        element.className = "line";
        next.className += " active";
        break;
      }else{
        continue;
      }
    }
})
