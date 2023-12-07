function Fel() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//Index    
    kep1 = new Image(); 	kep1.src = "cast/kep1.jpg"; 
    kep11 = new Image(); 	kep11.src = "cast/nagyit1.png"; 

    kep2 = new Image(); 	kep2.src = "cast/kep2.jpg"; 
    kep22 = new Image(); 	kep22.src = "cast/nagyit2.png";

    kep3 = new Image(); 	kep3.src = "cast/kep3.jpg"; 
    kep33 = new Image(); 	kep33.src = "cast/nagyit3.png";

    kep4 = new Image(); 	kep4.src = "cast/kep4.jpg"; 
    kep44 = new Image(); 	kep44.src = "cast/nagyit4.png";

    kep5 = new Image(); 	kep5.src = "cast/kep5.jpg"; 
    kep55 = new Image(); 	kep55.src = "cast/nagyit5.png";

    kep6 = new Image(); 	kep6.src = "cast/kep6.jpg"; 
    kep66 = new Image(); 	kep66.src = "cast/nagyit6.png";

    kep7 = new Image(); 	kep7.src = "cast/kep7.jpg";  
    kep77 = new Image(); 	kep77.src = "cast/nagyit7.png";

    kep8 = new Image(); 	kep8.src = "cast/kep8.jpg";  
    kep88 = new Image(); 	kep88.src = "cast/nagyit8.png";

    kep9 = new Image(); 	kep9.src = "cast/kep9.jpg";  
    kep99 = new Image(); 	kep99.src = "cast/nagyit9.png";

    kep10 = new Image(); 	kep10.src = "cast/kep10.jpg";  
    kep100 = new Image(); 	kep100.src = "cast/nagyit10.png";

    kep20 = new Image(); 	kep20.src = "cast/kep20.jpg";  
    kep200 = new Image(); 	kep200.src = "cast/nagyit20.png";

    kep30 = new Image(); 	kep30.src = "cast/kep30.jpg";  
    kep300 = new Image(); 	kep300.src = "cast/nagyit30.png";
    
function EgerFelette(szama) { 
    switch (szama)
    {
        case 1:document.getElementById("cast_kep1").src= kep1.src; break;
        case 11:document.getElementById("cast_kep1").src= kep11.src; break; 
        case 2:document.getElementById("cast_kep2").src=kep2.src; break;
        case 22:document.getElementById("cast_kep2").src=kep22.src; break;
        case 3:document.getElementById("cast_kep3").src= kep3.src; break;
        case 33:document.getElementById("cast_kep3").src= kep33.src; break; 
        case 4:document.getElementById("cast_kep4").src=kep4.src; break;
        case 44:document.getElementById("cast_kep4").src=kep44.src; break;
        case 5:document.getElementById("cast_kep5").src= kep5.src; break;
        case 55:document.getElementById("cast_kep5").src= kep55.src; break; 
        case 6:document.getElementById("cast_kep6").src=kep6.src; break;
        case 66:document.getElementById("cast_kep6").src=kep66.src; break;
        case 7:document.getElementById("cast_kep7").src= kep7.src; break;
        case 77:document.getElementById("cast_kep7").src= kep77.src; break; 
        case 8:document.getElementById("cast_kep8").src=kep8.src; break;
        case 88:document.getElementById("cast_kep8").src=kep88.src; break;
        case 9:document.getElementById("cast_kep9").src= kep9.src; break;
        case 99:document.getElementById("cast_kep9").src= kep99.src; break; 
        case 10:document.getElementById("cast_kep10").src=kep10.src; break;
        case 100:document.getElementById("cast_kep10").src=kep100.src; break;
        case 20:document.getElementById("cast_kep20").src=kep20.src; break;
        case 200:document.getElementById("cast_kep20").src=kep200.src; break;
        case 30:document.getElementById("cast_kep30").src=kep30.src; break;
        case 300:document.getElementById("cast_kep30").src=kep300.src; break;
    } 
}


//Quiz
function ures(){
    document.getElementById("eredmeny1").innerHTML = "";
    document.getElementById("eredmeny2").innerHTML = "";
    document.getElementById("eredmeny3").innerHTML = "";
    document.getElementById("eredmeny4").innerHTML = "";
    document.getElementById("eredmeny5").innerHTML = "";
    document.getElementById("eredmeny6").innerHTML = "";
    document.getElementById("eredmeny7").innerHTML = "";
    document.getElementById("eredmeny8").innerHTML = "";
    document.getElementById("eredmeny9").innerHTML = "";
    document.getElementById("eredmeny10").innerHTML = "";
    document.getElementById("eredmeny").innerHTML = "";
}

function elkuldes()
        {
            let pont = 0.0
            let eredharom = 0.0
            let eredhat = 0.0
            let eredhet = 0.0
            let erednyolc = 0.0
            if (document.getElementById("egy3").checked) {pont ++; document.getElementById("eredmeny1").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny1").style.color= "green"}
            else {document.getElementById("eredmeny1").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny1").style.color= "red"}

            if (document.getElementById("ketto3").checked) {pont ++; document.getElementById("eredmeny2").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny2").style.color= "green"}
            else {document.getElementById("eredmeny2").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny2").style.color= "red"}
            
            if (document.getElementById("harom1").checked) {eredharom = eredharom + 0.33}
            if (document.getElementById("harom2").checked) {eredharom = eredharom + 0.33}
            if (document.getElementById("harom3").checked) {eredharom = eredharom + 0.33} 
            if (eredharom >= 0.8){pont ++; document.getElementById("eredmeny3").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny3").style.color= "green"}
            else {pont = pont + eredharom; document.getElementById("eredmeny3").innerHTML = `Hiányos válasz. ${eredharom}/1`; document.getElementById("eredmeny3").style.color= "red"}

            if (document.getElementById("negy1").checked) {pont ++; document.getElementById("eredmeny4").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny4").style.color= "green"}
            else {document.getElementById("eredmeny4").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny4").style.color= "red"}

            if (document.getElementById("112").selected) {pont ++; document.getElementById("eredmeny5").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny5").style.color= "green"}
            else {document.getElementById("eredmeny5").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny5").style.color= "red"}
            
            if (document.getElementById("hat1").checked) {eredhat = eredhat + 0.25}
            if (document.getElementById("hat2").checked) {eredhat = eredhat + 0.25}
            if (document.getElementById("hat3").checked) {eredhat = eredhat + 0.25} 
            if (document.getElementById("hat4").checked) {eredhat = eredhat + 0.25}
            if (eredhat == 1){pont ++; document.getElementById("eredmeny6").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny6").style.color= "green"}
            else {pont = pont + eredhat; document.getElementById("eredmeny6").innerHTML = `Hiányos válasz. ${eredhat}/1`; document.getElementById("eredmeny6").style.color= "red"}

            if (document.getElementById("het1").checked) {eredhet = eredhet + 0.5}
            if (document.getElementById("het3").checked) {eredhet = eredhet + 0.5} 
            if (eredhet == 1){pont ++; document.getElementById("eredmeny7").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny7").style.color= "green"}
            else {pont = pont + eredhet; document.getElementById("eredmeny7").innerHTML = `Hiányos válasz. ${eredhet}/1`; document.getElementById("eredmeny7").style.color= "red"}

            if (document.getElementById("nyolc2").checked) {erednyolc = erednyolc + 0.5}
            if (document.getElementById("nyolc4").checked) {erednyolc = erednyolc + 0.5}
            if (erednyolc == 1){pont ++; document.getElementById("eredmeny8").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny8").style.color= "green"}
            else {pont = pont + erednyolc; document.getElementById("eredmeny8").innerHTML = `Hiányos válasz. ${erednyolc}/1`; document.getElementById("eredmeny8").style.color= "red"}

            if (document.getElementById("kilenc2").checked) {pont ++; document.getElementById("eredmeny9").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny9").style.color= "green"}
            else {document.getElementById("eredmeny9").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny9").style.color= "red"}

            if (document.getElementById("tiz4").checked) {pont ++; document.getElementById("eredmeny10").innerHTML = "Helyes válasz! 1/1"; document.getElementById("eredmeny10").style.color= "green"}
            else {document.getElementById("eredmeny10").innerHTML = "A válasz helytelen."; document.getElementById("eredmeny10").style.color= "red"}
           
            if (pont >= 9) { document.getElementById("eredmeny").innerHTML = (`Gratulálunk!!! Az eredményed: ${pont}/10`)}
            else { document.getElementById("eredmeny").innerHTML = (`Az eredményed: ${pont}/10`)}


        }

//Személyiségteszt
            function vissza()
            {
                document.getElementById("teszt_eredmeny").innerHTML = "";
                document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/terkep.jpg"
            }
            function Teszteles()
            {
                let tuz = 0 
                let viz = 0
                let fold = 0
                let levego = 0
               
                if (document.getElementById("egy1").checked) {fold++;}
                if (document.getElementById("egy2").checked) {tuz++;}
                if (document.getElementById("egy3").checked) {levego++;}
                if (document.getElementById("egy4").checked) {viz++;}

                if (document.getElementById("ketto1").checked) {levego++;}
                if (document.getElementById("ketto2").checked) {viz++;}
                if (document.getElementById("ketto3").checked) {fold++;}
                if (document.getElementById("ketto4").checked) {tuz++;}

                if (document.getElementById("harom1").checked) {viz++;}
                if (document.getElementById("harom2").checked) {tuz++;}
                if (document.getElementById("harom3").checked) {fold++;}
                if (document.getElementById("harom4").checked) {levego++;}

                if (document.getElementById("negy").value.toString().length > 2 || document.getElementById("negy").value < 0) {levego++}
                else if (document.getElementById("negy").value.toString().length == 2)
                    {
                        if (document.getElementById("negy").value % 2 == 0)
                        {
                            if (document.getElementById("negy").value.toString().slice(0,1) == document.getElementById("negy").value.toString().slice(1,2) || document.getElementById("negy").value % 10 == 0)
                            {
                                fold++;
                            } 
                            else {viz++;}
                        }
                        else if (document.getElementById("negy").value % 3 == 0 || document.getElementById("negy").value % 5 == 0 || document.getElementById("negy").value % 7 == 0) {tuz++;}
                            else {levego++;}
                    }
                    else if (document.getElementById("negy").value.toString().length == 1) 
                    {
                        if (document.getElementById("negy").value % 2 == 0) {levego++;}
                        else {tuz++;}
                    }

                if (document.getElementById("ot1").selected) {fold++;}
                if (document.getElementById("ot2").selected) {viz++;}
                if (document.getElementById("ot3").selected) {levego++;}
                if (document.getElementById("ot4").selected) {tuz++;}

                if (document.getElementById("hat1").checked) {tuz++;}
                if (document.getElementById("hat2").checked) {viz++;}
                if (document.getElementById("hat3").checked) {fold++;}
                if (document.getElementById("hat4").checked) {levego++;}

                if (document.getElementById("nyolc1").checked) {levego++;}
                if (document.getElementById("nyolc2").checked) {tuz++;}
                if (document.getElementById("nyolc3").checked) {viz++;}
                if (document.getElementById("nyolc4").checked) {fold++;}
                

                //==
                if (viz == tuz && tuz == fold && fold == levego && viz == 0) 
                {
                    document.getElementById("teszt_eredmeny").innerHTML = "Te nem lennél idomár!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/kard.jpg"
                }
                else if (viz == tuz && tuz == fold && fold == levego)
                {
                    if (document.getElementById("het1").checked){
                        document.getElementById("teszt_eredmeny").innerHTML = "Te lennél az Avatar!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/avatar.jpg"}
                    else {
                        document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg"}
                }
                let r = Math.floor((Math.random() * 3) + 1)
                //=
                if (viz == tuz && tuz == fold && fold > levego){
                    switch (r){
                        case 1:document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg";break;
                        case 2:document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg";break;
                        case 3:document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg";break;
                    }
                } else if (viz == tuz && tuz == levego && levego > fold) {
                    switch (r){
                        case 1:document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg";break;
                        case 2:document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg";break;
                        case 3:document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg";break;
                    }
                } else if (viz == fold && fold == levego && levego > tuz)
                {
                    switch (r){
                        case 1:document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg";break;
                        case 2:document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg";break;
                        case 3:document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg";break;
                    }                    
                } else if (levego == fold && fold == tuz && tuz > viz)
                {
                    switch (r){
                        case 1:document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg";break;
                        case 2:document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg";break;
                        case 3:document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                        document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg";break;
                    }   
                }

                //víz
                else if (viz > tuz && viz > fold && viz > levego)
                {
                    document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg"
                }
                else if (viz == tuz && viz > fold && viz > levego)
                {
                    if (levego > fold) {document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg"}
                }
                else if (viz == fold && viz > tuz && viz > levego)
                {
                    if (levego > tuz) {document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg"}
                }
                else if (viz == levego && viz > fold && viz > tuz)
                {
                    if (tuz > fold) {document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te vízhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/viz.jpg";}
                }

                //tűz
                else if (tuz > viz && tuz > fold && tuz > levego)
                {
                    document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg"
                }
                else if (tuz == fold && tuz > viz && tuz > levego)
                {
                    if (viz > levego) {document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg"}
                }
                else if (tuz == levego && tuz > viz && tuz > fold)
                {
                    if (viz > fold) {document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te tűzhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/tuz.jpg"}
                }

                //föld
                else if (fold > tuz && fold > viz && fold > levego)
                {
                    document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg"
                }
                else if (fold == levego && fold > tuz && fold > viz)
                {
                    if (tuz > viz)  {document.getElementById("teszt_eredmeny").innerHTML = "Te földhajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/fold.jpg"}
                    else {document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg"}
                }

                //levegő
                else if (levego > tuz && levego > fold && levego > viz)
                {
                    document.getElementById("teszt_eredmeny").innerHTML = "Te léghajlító lennél!";
                    document.getElementById("eredmeny_kep").src = "kepek/szemteszt_kepek/levego.jpg"
                }

                
                
            
                     
            }
