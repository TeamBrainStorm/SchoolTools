
foc_sid = 22;
var foc_t2_ttl = "Math Calculators";
var foc_t2_fil = "online-math-calculators.html"
var foc_pg = "";

var math_page_ar = [
   ["algebra-calculator.html","Algebra, Calculus, & Trigonometry","Algebra Calculator"],
   ["circle-calculator.html","Circle Area, Circum., Dia., Radius","Circle Calculator"],
   ["exponent-calculator.html","Exponential Expressions","Exponent Calculator"],
   ["online-factoring-calculator.html","Factoring a Number","Factoring Calculator"],
   ["greatest-common-factor-calculator.html","Greatest Common Factor (GCF)","Greatest Common Factor Calculator"],
   ["lcm-calculator.html","Least Common Multiple (LCM)","Least Common Multiple Calculator"],
   ["math-addition-facts-quiz.html","Learning Math Facts: Addition","Math Addition Facts Quiz"],
   ["multiplication-quiz.html","Learning Math Facts: Multiplication","Multiplication Quiz"],
   ["long-division-calculator.html","Long Division, remainders or decimals","Long Division Calculator"],
   ["average-calculator.html","Mean, Median, Mode, Range","Statistical Average Calculator"],
   ["prime-factoring-calculator.html","Prime Factorization of a Number","Prime Factoring Calculator"],
   ["prime-number-calculator.html","Prime Number Check","Prime Number Check Calculator"],
   ["prime-number-generator.html","Prime Number List Generator","Prime Number Generator"],
   ["adding-subtracting-fractions-calculator.html","Add Subtract 2 Fractions","Adding Subtracting Fractions Calculator"],
   ["adding-3-fractions-calculator.html","Add Subtract 3 Fractions","Adding 3 Fractions Calculator"],
   ["adding-subtracting-mixed-numbers.html","Add Subtract Mixed Numbers","Adding Subtracting Mixed Numbers Calculator"],
   ["compare-fractions-calculator.html","Compare Fractions","Compare Fractions Calculator"],
   ["dividing-fractions-calculator.html","Divide Fractions","Dividing Fractions Calculator"],
   ["multiplying-fractions-calculator.html","Multiply Fractions","Multiplying Fractions Calculator"],
   ["scientific-notation-calculator.html","Scientific Notation Math","Scientific Notation Calculator"],
   ["fraction-reducer.html","Simplify Fractions","Fraction Reducer"],
   ["linear-equation-solver.html","Solve Linear Equations","Linear Equation Solver"],
   ["percent-calculator.html","Solve Percentages","Percent Calculator"],
   ["percentage-change-calculator.html","Solve Percent Change","Percentage Change Calculator"],
   ["square-root-calculator.html","Solve Square Root","Square Root Calculator"]
];

   var v_file = document.location.href;
   var dom_ar = v_file.split("//");
   var url_ar = dom_ar[1].split("/");

   if(url_ar[1].indexOf("#") > -1) {
      var fil_ar = url_ar[1].split("#");
      foc_pg = fil_ar[0];
   } else {
      foc_pg = url_ar[1];
   }

   if(foc_pg != foc_t2_fil) {

      var v_math_links = "<ul>";

      for(var pp = 0; pp<math_page_ar.length; pp++) {

         if(foc_pg == math_page_ar[pp][0]) {
            var foc_t3_ttl = math_page_ar[pp][2];
            v_math_links += "<li> " + math_page_ar[pp][1] + "</li>";
         } else {
            v_math_links += "<li> <a href='" + math_page_ar[pp][0] + "'>" + math_page_ar[pp][1] + "</a></li>";
         }

      }

      v_math_links += "</ul>";

      foc_crumbs = "<div class='breadcrumbs'><a href='http://www.free-online-calculator-use.com/index.html'>Home</a> > "; 
      foc_crumbs += "<a href='http://www.free-online-calculator-use.com/" + foc_t2_fil + "'>" + foc_t2_ttl + "</a> > ";
      foc_crumbs += "" + foc_t3_ttl + "</div>";

   } else {

      foc_crumbs = "<div class='breadcrumbs'><a href='http://www.free-online-calculator-use.com/index.html'>Home</a> > "; 
      foc_crumbs += "" + foc_t2_ttl + "</div>";
   }

