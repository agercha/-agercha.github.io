window.onload = chooseAllPics;

var allPix = [
    "oracle_pics/DSC04167.JPG",
    "oracle_pics/DSC04198.JPG",
    "oracle_pics/DSC03813.JPG",
    "oracle_pics/DSC03556.JPG",
    "oracle_pics/DSC03581.JPG",
    "oracle_pics/DSC03740.JPG",
    "oracle_pics/DSC03783.JPG",
    "oracle_pics/DSC03797.JPG",
    "oracle_pics/DSC03973.JPG",
    "oracle_pics/DSC03972.JPG",
    "oracle_pics/DSC03796.JPG",
    "oracle_pics/DSC03782.JPG",
    "oracle_pics/DSC03769.JPG",
    "oracle_pics/DSC04012.JPG",
    "oracle_pics/DSC03755.JPG",
    "oracle_pics/DSC03999.JPG",
    "oracle_pics/DSC03580.JPG",
    "oracle_pics/DSC04210.JPG",
    "oracle_pics/DSC04199.JPG",
    "oracle_pics/DSC04170.JPG",
    "oracle_pics/DSC04164.JPG",
    "oracle_pics/DSC03838.JPG",
    "oracle_pics/DSC03421.JPG",
    "oracle_pics/DSC04212.JPG",
    "oracle_pics/DSC03582.JPG",
    "oracle_pics/DSC03958.JPG",
    "oracle_pics/DSC03965.JPG",
    "oracle_pics/DSC03971.JPG",
    "oracle_pics/DSC03568.JPG",
    "oracle_pics/DSC04171.JPG",
    "oracle_pics/DSC04159.JPG",
    "oracle_pics/DSC04175.JPG",
    "oracle_pics/DSC03815.JPG",
    "oracle_pics/DSC03578.JPG",
    "oracle_pics/DSC03593.JPG",
    "oracle_pics/DSC03752.JPG",
    "oracle_pics/DSC03784.JPG",
    "oracle_pics/DSC03960.JPG",
    "oracle_pics/DSC04014.JPG",
    "oracle_pics/DSC03800.JPG",
    "oracle_pics/DSC03633.JPG",
    "oracle_pics/DSC04174.JPG",
    "oracle_pics/DSC04162.JPG",
    "oracle_pics/DSC03816.JPG",
    "oracle_pics/DSC04189.JPG",
    "oracle_pics/DSC03584.JPG",
    "oracle_pics/DSC03792.JPG",
    "oracle_pics/DSC03744.JPG",
    "oracle_pics/DSC04003.JPG",
    "oracle_pics/DSC04017.JPG",
    "oracle_pics/DSC03546.JPG",
    "oracle_pics/DSC04188.JPG",
    "oracle_pics/DSC03817.JPG",
    "oracle_pics/DSC04163.JPG",
    "oracle_pics/DSC03680.JPG",
    "oracle_pics/DSC03737.JPG",
    "oracle_pics/DSC03938.JPG",
    "oracle_pics/DSC03939.JPG",
    "oracle_pics/DSC03483.JPG",
    "oracle_pics/DSC03871.JPG",
    "oracle_pics/DSC03708.JPG",
    "oracle_pics/DSC04099.JPG",
    "oracle_pics/DSC04066.JPG",
    "oracle_pics/DSC03735.JPG",
    "oracle_pics/DSC04102.JPG",
    "oracle_pics/DSC03484.JPG",
    "oracle_pics/DSC03533.JPG",
    "oracle_pics/DSC03725.JPG",
    "oracle_pics/DSC03526.JPG",
    "oracle_pics/DSC03485.JPG",
    "oracle_pics/DSC03644.JPG",
    "oracle_pics/DSC04101.JPG",
    "oracle_pics/DSC03524.JPG",
    "oracle_pics/DSC03914.JPG",
    "oracle_pics/DSC03848.JPG",
    "oracle_pics/DSC04100.JPG",
    "oracle_pics/DSC03460.JPG",
    "oracle_pics/DSC03448.JPG",
    "oracle_pics/DSC04051.JPG",
    "oracle_pics/DSC04092.JPG",
    "oracle_pics/DSC03930.JPG",
    "oracle_pics/DSC04093.JPG",
    "oracle_pics/DSC03918.JPG",
    "oracle_pics/DSC04078.JPG",
    "oracle_pics/DSC03529.JPG",
    "oracle_pics/DSC03515.JPG",
    "oracle_pics/DSC03449.JPG",
    "oracle_pics/DSC04118.JPG",
    "oracle_pics/DSC04132.JPG",
    "oracle_pics/DSC03891.JPG",
    "oracle_pics/DSC04126.JPG",
    "oracle_pics/DSC03517.JPG",
    "oracle_pics/DSC04052.JPG",
    "oracle_pics/DSC04091.JPG",
    "oracle_pics/DSC04084.JPG",
    "oracle_pics/DSC03516.JPG",
    "oracle_pics/DSC03847.JPG",
    "oracle_pics/DSC04127.JPG",
    "oracle_pics/DSC03890.JPG",
    "oracle_pics/DSC04123.JPG",
    "oracle_pics/DSC03843.JPG",
    "oracle_pics/DSC03738.JPG",
    "oracle_pics/DSC03923.JPG",
    "oracle_pics/DSC04094.JPG",
    "oracle_pics/DSC04095.JPG",
    "oracle_pics/DSC03842.JPG",
    "oracle_pics/DSC04120.JPG",
    "oracle_pics/DSC04134.JPG",
    "oracle_pics/DSC04108.JPG",
    "oracle_pics/DSC03854.JPG",
    "oracle_pics/DSC03459.JPG",
    "oracle_pics/DSC03934.JPG",
    "oracle_pics/DSC03921.JPG",
    "oracle_pics/DSC03841.JPG",
    "oracle_pics/DSC04135.JPG",
    "oracle_pics/DSC03882.JPG",
    "oracle_pics/DSC04121.JPG",
    "oracle_pics/DSC04152.JPG",
    "oracle_pics/DSC04185.JPG",
    "oracle_pics/DSC04191.JPG",
    "oracle_pics/DSC03826.JPG",
    "oracle_pics/DSC03577.JPG",
    "oracle_pics/DSC04032.JPG",
    "oracle_pics/DSC04026.JPG",
    "oracle_pics/DSC03749.JPG",
    "oracle_pics/DSC03946.JPG",
    "oracle_pics/DSC03952.JPG",
    "oracle_pics/DSC03947.JPG",
    "oracle_pics/DSC04027.JPG",
    "oracle_pics/DSC04033.JPG",
    "oracle_pics/DSC03562.JPG",
    "oracle_pics/DSC04190.JPG",
    "oracle_pics/DSC04184.JPG",
    "oracle_pics/DSC04153.JPG",
    "oracle_pics/DSC04145.JPG",
    "oracle_pics/DSC03414.JPG",
    "oracle_pics/DSC03560.JPG",
    "oracle_pics/DSC04227.JPG",
    "oracle_pics/DSC03951.JPG",
    "oracle_pics/DSC03945.JPG",
    "oracle_pics/DSC03950.JPG",
    "oracle_pics/DSC03978.JPG",
    "oracle_pics/DSC03987.JPG",
    "oracle_pics/DSC04030.JPG",
    "oracle_pics/DSC04024.JPG",
    "oracle_pics/DSC03763.JPG",
    "oracle_pics/DSC03561.JPG",
    "oracle_pics/DSC03429.JPG",
    "oracle_pics/DSC04187.JPG",
    "oracle_pics/DSC04193.JPG",
    "oracle_pics/DSC04144.JPG",
    "oracle_pics/DSC04150.JPG",
    "oracle_pics/DSC04154.JPG",
    "oracle_pics/DSC04140.JPG",
    "oracle_pics/DSC04168.JPG",
    "oracle_pics/DSC04197.JPG",
    "oracle_pics/DSC03559.JPG",
    "oracle_pics/DSC03997.JPG",
    "oracle_pics/DSC03954.JPG",
    "oracle_pics/DSC03940.JPG",
    "oracle_pics/DSC03798.JPG",
    "oracle_pics/DSC03968.JPG",
    "oracle_pics/DSC03799.JPG",
    "oracle_pics/DSC03941.JPG",
    "oracle_pics/DSC03955.JPG",
    "oracle_pics/DSC03982.JPG",
    "oracle_pics/DSC04035.JPG",
    "oracle_pics/DSC04021.JPG",
    "oracle_pics/DSC03558.JPG",
    "oracle_pics/DSC04182.JPG",
    "oracle_pics/DSC04196.JPG",
    "oracle_pics/DSC04169.JPG",
    "oracle_pics/DSC04141.JPG",
    "oracle_pics/DSC04143.JPG",
    "oracle_pics/DSC03837.JPG",
    "oracle_pics/DSC03764.JPG",
    "oracle_pics/DSC04022.JPG",
    "oracle_pics/DSC04208.JPG",
    "oracle_pics/DSC04220.JPG",
    "oracle_pics/DSC04195.JPG",
    "oracle_pics/DSC04181.JPG",
    "oracle_pics/DSC04156.JPG",
    "oracle_pics/DSC04142.JPG",
]
var oldPix = new Array();
function choosePic(i) {
    if (document.getElementById("myInfo").style.display != "block") {
        if (allPix.length === 0) {
            allPix = oldPix.slice();
            oldPix = new Array;
        } else {
            oldpic = document.getElementById("myPicture" + i).src;
            oldPix.push(oldpic);
            var randomPic = allPix[Math.floor(Math.random() * allPix.length)];
            document.getElementById("myPicture" + i).src = randomPic;
            allPix = allPix.filter(function(value, index, arr){ 
                return value.split("/").pop() != randomPic.split("/").pop();
            });
        }
    }
};
function chooseAllPics() {
    choosePic(1);
    choosePic(2);
    choosePic(3);
    choosePic(4);
};

function clickButton(url) {
    if (document.getElementById("myInfo").style.backgroundImage === url) {
        document.getElementById("myInfo").style.backgroundImage = "";
        document.getElementById("myInfo").style.display = "none";
    } else {
        document.getElementById("myInfo").style.backgroundImage = url;
        document.getElementById("myInfo").style.display = "block";
    }
}

function clickInfo() {
    clickButton("url(\"oracle_pics/oracle_info_small.png\")");
}

function clickNotes() {
    clickButton("url(\"oracle_pics/notes.png\")");
}