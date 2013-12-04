var arrowPos;
var arraySize = 10;
var arrayWidth;
var initReacValueIndex;
var initProdValueIndex;
var inputUnit = 3;
var outputUnit = 3;
var reacEqnArrayIndex;
var reactantPlusSign;
var output;
var productPlusSign;
var simEqnArrayIndex;
var storeProdCount;
var storeReacCount;

var prodCoefficientArray = new Array();
var reacCoefficientArray = new Array();
var elementArray = new Array("H",1.01,"He",4.00,
                             "Li",6.94,"Be",9.01,"B",10.81,"C",12.01,"N",14.01,"O",16.00,"F",19.00,"Ne",20.18,
                             "Na",22.99,"Mg",24.30,"Al",26.98,"Si",28.09,"P",30.97,"S",32.06,"Cl",35.45,"Ar",39.95,
                             "K",39.10,"Ca",40.08,"Sc",44.96,"Ti",47.88,"V",50.94,"Cr",52.00,"Mn",54.94,"Fe",55.85,"Co",58.93,"Ni",58.69,"Cu",63.55,"Zn",65.39,"Ga",69.72,"Ge",72.59,"As",74.92,"Se",78.96,"Br",79.90,"Kr",83.80,
                             "Rb",85.47,"Sr",87.62,"Y",88.91,"Zr",91.22,"Nb",92.91,"Mo",95.94,"Tc",98.00,"Ru",101.07,"Rh",102.91,"Pd",106.42,"Ag",107.87,"Cd",112.41,"In",114.82,"Sn",118.71,"Sb",121.75,"Te",127.60,"I",126.90,"Xe",131.29,
                             "Cs",132.90,"Ba",137.33,"La",138.91,"Ce",140.12,"Pr",140.91,"Nd",144.24,"Pm",145.00,"Sm",150.36,"Eu",151.96,"Gd",157.25,"Tb",158.92,"Dy",162.50,"Ho",164.93,"Er",167.26,"Tm",168.93,"Yb",173.04,"Lu",174.97,"Hf",178.49,"Ta",180.95,"W",183.85,"Re",186.21,"Os",190.20,"Ir",192.22,"Pt",195.08,"Au",196.97,"Hg",200.59,"Tl",204.38,"Pb",207.20,"Bi",208.98,"Po",209.00,"At",210.00,"Rn",222.00,
                             "Fr",223.00,"Ra",226.02,"Ac",227.03,"Th",232.04,"Pa",231.04,"U",238.03);
var reacEqnArray = new Array(arraySize);
var unitArray = new Array(0,0,22.4,6.02 * Math.pow(10,23));
var outputProductArray = new Array();
var outputReactantArray = new Array();
var plusPosProductArray = new Array();
var plusPosReactantArray = new Array();
var reactantArray = new Array();
var initReacValueArray = new Array();
var initProdValueArray = new Array();
var reactantValueArray = new Array();
var reacOffSetArray = new Array(0,1,2,0,0,4,5,0,0,7,8,0,0,10,11,0,0,13,14);
var prodOffSetArray = new Array(0,0,0,3,4,0,0,6,7,0,0,10,11,0,0,12,13,0,0,15,16);
var productArray = new Array();
var productValueArray = new Array();
var storeProdArray = new Array();
var storeReacArray = new Array();
var workArray = new Array();