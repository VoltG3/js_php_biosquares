




// -------------------------------------------------------
//  [POST 2] - select target element
// -------------------------------------------------------

let selectedRegion; // variables for fetched innerText
let selectedName;
let selectedPopulation;
let selectedLandarea;
let selectedMapInfo;
let selectedMapImg;
let selectedMapID;

function EventListener(){ console.log(out(2)) // #H
    // ----------------------------------------------------------------------------------{ IDS
    // ----------------------------------------------------------------------------------{ LANDCODES

    // ----------------------------------------------------------------------------------{ NAMES
    document.querySelector('.section--names').addEventListener('click', (x) => {  
        // section headr 
        if(x.target.className === 'headerName') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'name') { // get innerText as variable
            selectedName = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedName)
        } return selectedName
    })
   
    // ----------------------------------------------------------------------------------------{ REGIONS
    document.querySelector('.section--regions').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerRegion') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'region') { // get innerText as variable
            selectedRegion = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedRegion) 
        } return selectedRegion
    }) 
   
    // ------------------------------------------------------------------------------------{ POPULATIONS
    document.querySelector('.section--populations').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerPopulation') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'population') { // get innerText as variable
            selectedPopulation = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedPopulation) 
        } return selectedPopulation
    }) 
  
    // --------------------------------------------------------------------------------------{ LANDAREAS
    document.querySelector('.section--landareas').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerLandarea') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'landarea') { // get innerText as variable
            selectedLandarea = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedLandarea) 
        } return selectedLandarea
    }) 
  
    // --------------------------------------------------------------------------------------{ MAPS INFO 
    document.querySelector('.section--map--info').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerMapInfo') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'mapinfo') { // get innerText as variable
            selectedMapInfo = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedMapInfo) 
        } return selectedMapInfo        
    })
    
    // ----------------------------------------------------------------------------------{ MAPS IMG LIST 
    document.querySelector('.section--map--img--list').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerMapImgList') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'mapimg') { // get tag as variable
            selectedMapImg = x.target; 
            selectedMapID = x.target.id         
            console.log('[POST 2] - target className    ->', x.target, 'selected tag ->', selectedMapImg, 'selected ID', selectedMapID) 
         

            // add selected img
            let selectedURL = 'http://localhost/localhost/BioSquare/img/maps/' + selectedMapID
            let selectedImage = new Image()
                selectedImage.src = selectedURL
                selectedImage.className = 'selectedImg'
                selectedImage.id = selectedMapID
            document.querySelector('.section--selected--map').appendChild(selectedImage)

     
            // #####
            // #####
            // #####

            // add selected img
           /*  let SELECTED_MAP = document.createElement('img')                                 // maina bildi uz klikka !!!!
            let SELECTED_ITM = document.createElement('img')

                SELECTED_ITM = selectedMapImg

                SELECTED_MAP.appendChild(SELECTED_ITM)
                document.querySelector('.section--selected--map').append(SELECTED_MAP) */

        } return selectedMapImg 
    }) 


    // ----------------------------------------------------------------------------------{ SELECTED MAP 
   /*  document.querySelector('.section--map--img--list').addEventListener('click', (x) => {  
        // section headr
        if(x.target.className === 'headerMapImgList') { 
            console.log('[POST 2] - target section header', x.target)  
        } 

        // section items
        if(x.target.className === 'mapimg') { // get innerText as variable
            selectedMap = x.target.textContent;
            console.log('[POST 2] - target className    ->', x.target, 'selected innerText ->', selectedMap) 
        } return selectedMap        
    })  */
}

// -------------------------------------------------------
//  [POST 1] - render and display data 
// -------------------------------------------------------

let tmp = [] // temporary array 
function displayRegions(data){ console.log(out(1)) // #H
    data.forEach(character => {
        const { id, langcode, name, region, population, landarea, map } = character

        // check is missing data in the row
        if( population == null || landarea == null ){
            console.log('[POST 1] - missing data! row id ->', id, 'data for this id is excluded from adding')
        } 

        // add -> id ----------------------------------------------------------------
            let ELM_ID = document.createElement('h5')   // init container
            let ITM_ID = document.createElement('h5')   // init content
                ITM_ID.className = 'id'                 // add  className

                ITM_ID.textContent = `${id}`            // add content

                ELM_ID.appendChild(ITM_ID)              // add content to container
                document.querySelector('.section--ids').append(ELM_ID) // push

        // add -> landcode ----------------------------------------------------------
            let ELM_LANGCODE = document.createElement('h5')
            let ITM_LANGCODE = document.createElement('h5')
                ITM_LANGCODE.className = 'id'

                ITM_LANGCODE.textContent = `${langcode}`

                ELM_LANGCODE.appendChild(ITM_LANGCODE)
                document.querySelector('.section--landcodes').append(ELM_LANGCODE)

        // add -> name --------------------------------------------------------------
            let ELM_NAME = document.createElement('h5')
            let ITM_NAME = document.createElement('h5')
                ITM_NAME.className = 'name'
                ITM_NAME.id = `${id}`

                ITM_NAME.textContent = `${name}`

                ELM_NAME.appendChild(ITM_NAME)
                document.querySelector('.section--names').append(ELM_NAME)

        // add -> region ------------------------------------------------------------
            let ELM_REGION = document.createElement('h5') 
            let ITM_REGION = document.createElement('h5')
                ITM_REGION.className = 'region'                   
 
            if(tmp.indexOf(region) === -1){             // if it's unique
               tmp.push(region)                         // add to array
               ITM_REGION.textContent = `${region}`     // and add to content
     
                ELM_REGION.appendChild(ITM_REGION)
                document.querySelector('.section--regions').append(ELM_REGION);  
            } 
        // add -> population --------------------------------------------------------
            let ELM_POPULTION = document.createElement('h5')
            let ITM_POPULATION = document.createElement('h5')
                ITM_POPULATION.className = 'population'
                ITM_POPULATION.id = `${id}`

                ITM_POPULATION.textContent = `${population}`

                ELM_POPULTION.appendChild(ITM_POPULATION)
                document.querySelector('.section--populations').append(ELM_POPULTION)
        // add -> landarea ----------------------------------------------------------
            let ELM_LANDAREA = document.createElement('h5')
            let ITM_LANDAREA = document.createElement('h5')
                ITM_LANDAREA.className = 'landarea'
                ITM_LANDAREA.id = `${id}`

                ITM_LANDAREA.textContent = `${landarea}`

                ELM_LANDAREA.appendChild(ITM_LANDAREA)
                document.querySelector('.section--landareas').append(ELM_LANDAREA)

        // add -> map info ----------------------------------------------------------
            let ELM_MAP = document.createElement('h5')
            let ITM_MAP = document.createElement('h5')
                ITM_MAP.className = 'mapinfo' 
              
                ITM_MAP.id = `${id}`
                ITM_MAP.textContent = `${map}`

                ELM_MAP.appendChild(ITM_MAP)
                document.querySelector('.section--map--info').append(ELM_MAP)  
     
        // add -> map img list ------------------------------------------------------
            let url = 'http://localhost/localhost/BioSquare/img/maps/' + `${map}`
            let image = new Image()
                image.src = url
                image.className = 'mapimg'
                image.id = `${map}`
            document.querySelector('.section--map--img--list').appendChild(image)
    })
}

// -------------------------------------------------------
//  [POST 0] - fetch API all DATA
// -------------------------------------------------------

let callFetch =  null;

/* function ferch(){ */
    console.log(out(0)) // #H
    fetch('http://localhost/localhost/BioSquare/php/API.php/')
        .then((response) => {
            console.log('[POST 0] - resolved', response)
            return response.json()
        }).then(data => {

           /*  switch(callFetch){
                case null:
            } */
            displayRegions(data)
        
            EventListener()

        }).catch(err => console.log('[POST 0] - reject', err))
/* } */
// -------------------------------------------------------
//  std::cout << section header
// -------------------------------------------------------

function out(x){
    let headerText = null;
    switch(x){
        case 0: headerText = '[POST 0] ######################################################## [fetch API all DATA]'; break;
        case 1: headerText = '[POST 1] ################################################### [render and display data]'; break; 
        case 2: headerText = '[POST 2] ##################################################### [select target element]'; break;
    } return headerText 
}
