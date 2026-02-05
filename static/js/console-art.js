(() => {
    //if (sessionStorage.getItem("consoleArtShown")) return;
    //sessionStorage.setItem("consoleArtShown", "true");

    const red = "color: #c62828; font-family: monospace; font-size: 12px;";
    const blue = "color: #1e5fd8; font-family: monospace; font-size: 12px;";
    const gray = "color: #888; font-family: sans-serif; font-size: 12px;";

    console.log(
        `%c                  :::::::::::::::::::                     
                   :::           :::                      
                    :::         :::                      
                     :::       :::                       
                      :::     :::                        
                       :::   :::                         
                        ::: :::                          
                         :::::                          
                          :::                            
                         :::::                           
                        ::: :::                          
                       :::%c-=-%c:::                         
                      :::%c-===-%c:::                         
                     :::%c-=====-%c:::                        
                    :::%c-=======-%c:::                       
                   :::%c-=========-%c:::                      
                  :::%c-===========-%c:::                     
                 :::%c-=====   =====-%c:::                     
                :::%c-=====     =====-%c:::                    
               :::%c-=================-%c:::                   
              :::%c-===================-%c:::                  
             :::%c-======         ======-%c:::                 
            ::;%c-======%c:::::::::::%c======-%c:::                `,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue,
        red, blue, red
    );

    console.log(
        "%cAvantgarde Inmobiliarios y Construcciones\n%cGerman-quality building in Paraguay",
        "color:#c62828; font-weight:bold; font-size:13px;",
        gray,
    );
})();
