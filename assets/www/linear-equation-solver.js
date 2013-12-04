//*******************************************
//Linear Equation Solver
//2011 Daniel C. Peterson ALL RIGHTS RESERVED
//Created: 10/10/2011
//Last Modified: 10/11/2011
//This script may not be copied, edited or reproduced
//without express written permission from
//Daniel C. Peterson of Web Winder Website Services
//For commercial use rates, contact:
//Web Winder Website Services
//P.O. Box 11
//Bemidji, MN  56619
//dan@webwinder.com
//http://www.webwinder.com
//Commercial User License #:free-online-calculator-use.com
//Code protected by COPYSCAPE
//A prerequisite to business success is INTEGRITY.
//Show that YOU have integrity by respecting the hard work that
//went into building this calculator.
//*******************************************

var var_ar = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var var_ar_caps = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

function get_samp(form) {

   var samps_idx = document.calc.samps.selectedIndex;
   var samps_txt = document.calc.samps.options[samps_idx].text;

   if(samps_txt.indexOf("---") > -1) {
      document.calc.equation.value = "";
   } else {
      document.calc.equation.value = samps_txt;
   }

   clear_results(document.calc);

}

function solve_equation(form) {

   var v_equation = document.calc.equation.value;

   var v_variable = "";
   var var_match_cnt = 0;

   var l_paren_cnt = 0;
   var r_paren_cnt = 0;
   var equal_cnt = 0;

   for(var i = 0; i<var_ar.length; i++) {
      if(v_equation.indexOf(var_ar[i]) > -1) {
         v_variable = var_ar[i];
         var_match_cnt += 1;
      }
      if(v_equation.indexOf(var_ar_caps[i]) > -1) {
         v_variable = var_ar_caps[i];
         var_match_cnt += 1;
      }
   }

   for(var i = 0; i<v_equation.length; i++) {

      if(v_equation.charAt(i) == "(") {
         l_paren_cnt += 1;
      }

      if(v_equation.charAt(i) == ")") {
         r_paren_cnt += 1;
      }

      if(v_equation.charAt(i) == "=") {
         equal_cnt += 1;
      }

   }


   if(v_equation.length == 0) {
      alert("Please enter a linear equation.");
      document.calc.equation.focus();
   } else
   if(v_equation.indexOf(" ") > -1) {
      alert("Please remove spaces from the entered linear equation.");
      document.calc.equation.focus();
   } else
   if(var_match_cnt == 0) {
      alert("Please add a variable in the entered linear equation.");
      document.calc.equation.focus();
   } else
   if(var_match_cnt > 1) {
      alert("Only one variable is allowed in the entered linear equation.");
      document.calc.equation.focus();
   } else
   if(l_paren_cnt != r_paren_cnt) {
      alert("You have an odd number of parenthesis in the entered linear equation. Please correct.");
      document.calc.equation.focus();
   } else
   if(equal_cnt != 1) {
      alert("You must have one and only one equal sign. Please correct.");
      document.calc.equation.focus();
   } else {


      var tbl = "<br /><br /><center><table class='ChartTable'>";
      tbl += "<tr><td colspan='2' class='ChartTextCellLeft'>";
      tbl += "<img src='image-files/calcy-pointer-right.jpg' width='60' height='54' class='ItemLeft' />";
      tbl += "Please check my work to make sure the result does solve the equation. Substitute the ";
      tbl += "result for the variable (" + v_variable + ") to make sure my calculations are correct.";
      tbl += "</td></tr>";

      tbl += "<tr><td width='200' class='ChartTextCellLeft'>Equation: </td>";
      tbl += "<td width='350' class='ChartTextCell'>" + v_equation + "</td></tr>";
      

      var l_frac_idx_ar = new Array();
      var l_frac_typ_ar = new Array(); //0=cons, 1=coef
      var l_frac_num_ar = new Array();
      var l_frac_den_ar = new Array();

      var r_frac_idx_ar = new Array();
      var r_frac_typ_ar = new Array(); //0=cons, 1=coef
      var r_frac_num_ar = new Array();
      var r_frac_den_ar = new Array();
      var lcm_ar = new Array();

      var l_dec_ar = new Array();
      var l_dec_typ_ar = new Array(); //0=cons, 1=coef
      var r_dec_ar = new Array();
      var r_dec_typ_ar = new Array(); //0=cons, 1=coef

         if(v_equation.indexOf("(") > -1) {

            var num_pars = 1;
            var pars_cnt = 0;

            while(num_pars > 0 && pars_cnt < 10) {

               pars_cnt += 1;

               if(v_equation.indexOf("(") > -1) {



                  var l_par_pos = v_equation.indexOf("(");
                  var r_par_pos = v_equation.indexOf(")");
      
                  var dist_equat = v_equation.substring(l_par_pos+1,r_par_pos);

                  var dist_pos = 0;


                  for(var i = l_par_pos; i>-1; i--) {

                     if(v_equation.charAt(i) == "=" || v_equation.charAt(i) == "+" || v_equation.charAt(i) == "-") {

                        if(v_equation.charAt(i) == "=") {
                           dist_pos = i+1;
                           break;
                        } else {
                           dist_pos = i;
                           break;
                        }
                     }

                  }

                  var dist_num = v_equation.substring(dist_pos,l_par_pos);

                  var dist_split_pos = 0;

                  if(dist_equat.indexOf("+") > -1) {
                     dist_split_pos = dist_equat.indexOf("+");
                  } else {
                     dist_split_pos = dist_equat.lastIndexOf("-");
                  }

                  dist_1 = dist_equat.substring(0,dist_split_pos);
                  dist_2 = dist_equat.substring(dist_split_pos,dist_equat.length);

                  var dist_1_var = 0;
                  var dist_1_num = 0;
                  if(dist_1.indexOf(v_variable) > -1) {
                     dist_1 = dist_1.substring(0,dist_1.length-1);
                     if(dist_1 == "" || dist_1 == "+" || dist_1 == "-") {
                        dist_1 += "1";
                     }
                     dist_1_var = 1;
                  }
                  dist_1_num = dist_1;

                  var dist_2_var = 0;
                  var dist_2_num = 0;
                  if(dist_2.indexOf(v_variable) > -1) {
                     dist_2 = dist_2.substring(0,dist_2.length-1);
                     if(dist_2 == "" || dist_2 == "+" || dist_2 == "-") {
                        dist_2 += "1";
                     }
                     dist_2_var = 1;
                  }
                  dist_2_num = dist_2;



                  if(dist_num.indexOf("/") >-1 || dist_1_num.indexOf("/") >-1 || dist_2_num.indexOf("/") >-1) {

                     if(dist_num.indexOf("/") >-1) {
                        var dist_frac_ar = dist_num.split("/");
                        var dist_frac_num = dist_frac_ar[0];
                        var dist_frac_den = dist_frac_ar[1];
                     } else {
                        var dist_frac_num = dist_num;
                        var dist_frac_den = 1;
                     }
                  

                     if(dist_1_num.indexOf("/") >-1) {
                        var dist_frac_1_ar = dist_1_num.split("/");
                        var dist_frac_1_num = dist_frac_1_ar[0];
                        var dist_frac_1_den = dist_frac_1_ar[1];
                     } else {
                        var dist_frac_1_num = dist_1_num;
                        var dist_frac_1_den = 1;
                     }


                     if(dist_2_num.indexOf("/") >-1) {
                        var dist_frac_2_ar = dist_2_num.split("/");
                        var dist_frac_2_num = dist_frac_2_ar[0];
                        var dist_frac_2_den = dist_frac_2_ar[1];
                     } else {
                        var dist_frac_2_num = dist_2_num;
                        var dist_frac_2_den = 1;
                     }

                     var dist_1_num_final = dist_frac_num * dist_frac_1_num;
                     var dist_2_num_final = dist_frac_num * dist_frac_2_num;
                     var dist_1_den_final = dist_frac_den * dist_frac_1_den;
                     var dist_2_den_final = dist_frac_den * dist_frac_2_den;


                     var dist_1_fnl = dist_1_num_final + "/" + dist_1_den_final;
                     var dist_2_fnl = dist_2_num_final + "/" + dist_2_den_final;

                  } else {

                     var dist_1_fnl = "" + (dist_num * dist_1_num) + "";
                     var dist_2_fnl = "" + (dist_num * dist_2_num) + "";

                  }




                  var dist_insert = "";
                  if(dist_1_fnl.indexOf("-") == -1) {
                     dist_insert += "+";
                  }
                  dist_insert += "" + dist_1_fnl + "";
                  if(dist_1_var == 1) {
                    dist_insert += "" + v_variable + "";
                  }
                  if(dist_2_fnl.indexOf("-") == -1) {
                     dist_insert += "+";
                  }
                  dist_insert += "" + dist_2_fnl + "";
                  if(dist_2_var == 1) {
                    dist_insert += "" + v_variable + "";
                  }

                  v_equation = v_equation.substring(0,dist_pos) + "" + dist_insert + "" + v_equation.substring(r_par_pos+1,v_equation.length);

                  if(v_equation.charAt(0) == "+") {
                     v_equation = v_equation.substring(1,v_equation.length);
                  }



               } else {

                  num_pars = 0;
               }

            }


            if(v_equation.charAt(v_equation.indexOf("=")+1) == "+") {
               v_equation = v_equation.substring(0,v_equation.indexOf("=")+1) + "" + v_equation.substring(v_equation.indexOf("=")+2,v_equation.length);
            }

            tbl += "<tr><td class='ChartTextCellLeft'>After removing parenthesis using distributive property: </td>";
            tbl += "<td class='ChartTextCell'>" + v_equation + "</td></tr>";

         }

      var sides_ar = v_equation.split("=");



      var l_len = sides_ar[0].length;

      var l_sign_pos_str = l_len;
      var l_sign_str = l_len;

      for(var i = 0; i<l_len; i++) {

         if(sides_ar[0].substring(i,i+1) == "+") {
            l_sign_pos_str += "|" + i;
            l_sign_str += "|+";
         } else
         if(sides_ar[0].substring(i,i+1) == "-") {
            l_sign_pos_str += "|" + i;
            l_sign_str += "|-";
         } else {

            if(i==0) {
               l_sign_pos_str += "|0";
               l_sign_str += "|+";
            }

         }

      }

      l_sign_pos_ar = l_sign_pos_str.split("|");
      l_sign_ar = l_sign_str.split("|");

      l_term_list = "";
      var l_term_ar = new Array();
      var r_term_ar = new Array();

      var equal_sign_chk = 0;
      var term = "";

      for(s = 1; s<l_sign_pos_ar.length; s++) {

         term = sides_ar[0].substring(l_sign_pos_ar[s],l_sign_pos_ar[s+1]);
         dec_term = term;
         l_term_ar.push(term);


         if(v_equation.indexOf("/") > -1) {

            l_frac_idx_ar.push(l_term_ar.length-1);

            if(term.indexOf("/") > -1) {

               if(term.indexOf(v_variable) > -1) {
                  term=term.substring(0,term.length-1);
                  l_frac_typ_ar.push(1);
               } else {
                  l_frac_typ_ar.push(0);
               }
               var frac_ar = term.split("/");
               lcm_ar.push(frac_ar[1]);
               l_frac_num_ar.push(frac_ar[0]);
               l_frac_den_ar.push(frac_ar[1]);

            } else {
               if(term.indexOf(v_variable) > -1) {
                  term=term.substring(0,term.length-1);
                  l_frac_typ_ar.push(1);
               } else {
                  l_frac_typ_ar.push(0);
               }
               lcm_ar.push(1);
               l_frac_num_ar.push(term);
               l_frac_den_ar.push(1);
            }

         }


         if(v_equation.indexOf(".") > -1) {

            if(dec_term.indexOf(v_variable) > -1) {
               dec_term=dec_term.substring(0,dec_term.length-1);
               l_dec_typ_ar.push(1);
            } else {
               l_dec_typ_ar.push(0);
            }
            l_dec_ar.push(dec_term);

         }



      }



      var r_len = sides_ar[1].length;

      var r_sign_pos_str = r_len;
      var r_sign_str = r_len;

      for(var i = 0; i<r_len; i++) {

         if(sides_ar[1].substring(i,i+1) == "+") {
            r_sign_pos_str += "|" + i;
            r_sign_str += "|+";
         } else
         if(sides_ar[1].substring(i,i+1) == "-") {
            r_sign_pos_str += "|" + i;
            r_sign_str += "|-";
         } else {

            if(i==0) {
               r_sign_pos_str += "|0";
               r_sign_str += "|+";
            }

         }

      }

      r_sign_pos_ar = r_sign_pos_str.split("|");
      r_sign_ar = r_sign_str.split("|");

      r_term_list = "";
      var r_term_ar = new Array();
      var r_term_ar = new Array();

      var equar_sign_chk = 0;
      var term = "";

      for(s = 1; s<r_sign_pos_ar.length; s++) {

         term = sides_ar[1].substring(r_sign_pos_ar[s],r_sign_pos_ar[s+1]);
         dec_term = term;
         r_term_ar.push(term);


         if(v_equation.indexOf("/") > -1) {

            r_frac_idx_ar.push(r_term_ar.length-1);

            if(term.indexOf("/") > -1) {

               if(term.indexOf(v_variable) > -1) {
                  term=term.substring(0,term.length-1);
                  r_frac_typ_ar.push(1);
               } else {
                  r_frac_typ_ar.push(0);
               }
               var frac_ar = term.split("/");
               lcm_ar.push(frac_ar[1]);
               r_frac_num_ar.push(frac_ar[0]);
               r_frac_den_ar.push(frac_ar[1]);

            } else {
               if(term.indexOf(v_variable) > -1) {
                  term=term.substring(0,term.length-1);
                  r_frac_typ_ar.push(1);
               } else {
                  r_frac_typ_ar.push(0);
               }
               lcm_ar.push(1);
               r_frac_num_ar.push(term);
               r_frac_den_ar.push(1);
            }

         }


         if(v_equation.indexOf(".") > -1) {

            if(dec_term.indexOf(v_variable) > -1) {
               dec_term=dec_term.substring(0,term.length-1);
               r_dec_typ_ar.push(1);
            } else {
               r_dec_typ_ar.push(0);
            }
            r_dec_ar.push(dec_term);

         }

      }



      if(lcm_ar.length > 0) {

         var lcm = 0;
         var mult_chk = 0;
         var lcm_cnt = 0;

         while(mult_chk == 0 && lcm_cnt < 100000) {

            lcm_cnt += 1;
            lcm_rem = 0;

            for(var i=0; i<lcm_ar.length; i++) {
               lcm_rem += lcm_cnt % lcm_ar[i];
            }
            if(lcm_rem == 0) {
               lcm = lcm_cnt;
               mult_chk = 1;
            }
         }

         var frac_num = 0;
         var frac_div = 0;
               

            for(var i = 0; i<l_frac_idx_ar.length; i++) {

               frac_div = lcm / l_frac_den_ar[i];
               frac_num = frac_div * l_frac_num_ar[i];

               if(l_frac_typ_ar[i]==1) {
                  l_term_ar[l_frac_idx_ar[i]] = "" + frac_num + "" + v_variable + "";
                  if(l_dec_ar.length > 0) {
                     l_dec_ar[i] = "" + frac_num + "";
                  }
               } else {
                  l_term_ar[l_frac_idx_ar[i]] = "" + frac_num + "";
                  if(l_dec_ar.length > 0) {
                     l_dec_ar[i] = "" + frac_num + "";
                  }
               }
            }


            for(var i = 0; i<r_frac_idx_ar.length; i++) {

               frac_div = lcm / r_frac_den_ar[i];
               frac_num = frac_div * r_frac_num_ar[i];

               if(r_frac_typ_ar[i]==1) {
                  r_term_ar[r_frac_idx_ar[i]] = "" + frac_num + "" + v_variable + "";
                  if(r_dec_ar.length > 0) {
                     r_dec_ar[i] = "" + frac_num + "";
                  }
               } else {
                  r_term_ar[r_frac_idx_ar[i]] = "" + frac_num + "";
                  if(r_dec_ar.length > 0) {
                     r_dec_ar[i] = "" + frac_num + "";
                  }
               }
            }


         tbl += "<tr><td class='ChartTextCellLeft'>Fractions in the above equation were removed by multiplying both sides by " + lcm + " (";
         tbl += "lowest common multiple of all denominators: " + lcm_ar + ")</td>";
         tbl += "<td class='ChartTextCell'>";
         for(var i = 0; i<l_term_ar.length; i++) {
            if(l_term_ar[i].indexOf("-") == -1 && i > 0) {
               tbl += "+" + l_term_ar[i] + "";
            } else {
               tbl += "" + l_term_ar[i] + "";
            }
         }
         tbl += "=";
         for(var i = 0; i<r_term_ar.length; i++) {
            if(r_term_ar[i].indexOf("-") == -1 && i > 0) {
               tbl += "+" + r_term_ar[i] + "";
            } else {
               tbl += "" + r_term_ar[i] + "";
            }
         }
         tbl += "</td></tr>";

      }





      if(v_equation.indexOf(".") > -1) {

         var dec_equiv = 0;

         for(var i = 0; i<l_dec_ar.length; i++) {

            dec_equiv = Math.round(l_dec_ar[i] * 100);

            if(l_dec_typ_ar[i]==1) {
               l_term_ar[i] = "" + dec_equiv + "" + v_variable + "";
            } else {
               l_term_ar[i] = "" + dec_equiv + "";
            }
         }

         for(var i = 0; i<r_dec_ar.length; i++) {

            dec_equiv = Math.round(r_dec_ar[i] * 100);

            if(r_dec_typ_ar[i]==1) {
               r_term_ar[i] = "" + dec_equiv + "" + v_variable + "";
            } else {
               r_term_ar[i] = "" + dec_equiv + "";
            }
         }

         tbl += "<tr><td class='ChartTextCellLeft'>Decimals removed from the above equation by multiplying both sides by 100: </td>";
         tbl += "<td class='ChartTextCell'>";
         for(var i = 0; i<l_term_ar.length; i++) {
            if(l_term_ar[i].indexOf("-") == -1 && i > 0) {
               tbl += "+" + l_term_ar[i] + "";
            } else {
               tbl += "" + l_term_ar[i] + "";
            }
         }
         tbl += "=";
         for(var i = 0; i<r_term_ar.length; i++) {
            if(r_term_ar[i].indexOf("-") == -1 && i > 0) {
               tbl += "+" + r_term_ar[i] + "";
            } else {
               tbl += "" + r_term_ar[i] + "";
            }
         }
         tbl += "</td></tr>";



      }


      var l_coef_ar = new Array();
      var l_cons_ar = new Array();

      for(var i = 0; i<l_term_ar.length; i++) {

         if(l_term_ar[i].indexOf(v_variable) > -1) {
            l_coef_ar.push(l_term_ar[i]);
         } else {
            l_cons_ar.push(l_term_ar[i]);
         }
      }



   var l_cons = 0;

   if(l_cons_ar.length > 1) {
      for(var i = 0; i<l_cons_ar.length; i++) {
         l_cons += Number(l_cons_ar[i]);
      }

   } else
   if(l_cons_ar.length == 1) {
      l_cons = l_cons_ar[0];
   }

   var l_coef = 0;
   var l_coef_num = 0;

   if(l_coef_ar.length > 1) {
      for(var i = 0; i<l_coef_ar.length; i++) {
         l_coef_num = l_coef_ar[i].substring(0,l_coef_ar[i].length-1);
         if(l_coef_num == "" || l_coef_num == "+" || l_coef_num == "-") {
            l_coef_num = "" + l_coef_num + "1";
         }
         l_coef += Number(l_coef_num);
      }
   } else
   if(l_coef_ar.length == 1) {
      l_coef_num = l_coef_ar[0].substring(0,l_coef_ar[0].length-1);
      if(l_coef_num == "" || l_coef_num == "+" || l_coef_num == "-") {
         l_coef_num = "" + l_coef_num + "1";
      }
      l_coef += Number(l_coef_num);
   }


   var r_coef_ar = new Array();
   var r_cons_ar = new Array();

   for(var i = 0; i<r_term_ar.length; i++) {

      if(r_term_ar[i].indexOf(v_variable) > -1) {
         r_coef_ar.push(r_term_ar[i]);
      } else {
         r_cons_ar.push(r_term_ar[i]);
      }
   }



   var r_cons = 0;

   if(r_cons_ar.length > 1) {
      for(var i = 0; i<r_cons_ar.length; i++) {
         r_cons += Number(r_cons_ar[i]);
      }
   } else
   if(r_cons_ar.length == 1) {
      r_cons = r_cons_ar[0];
   }

   var r_coef = 0;
   var r_coef_num = 0;

   if(r_coef_ar.length > 1) {
      for(var i = 0; i<r_coef_ar.length; i++) {
         r_coef_num = r_coef_ar[i].substring(0,r_coef_ar[i].length-1);
         if(r_coef_num == "" || r_coef_num == "+" || r_coef_num == "-") {
            r_coef_num = "" + r_coef_num + "1";
         }
         r_coef += Number(r_coef_num);
      }
   } else
   if(r_coef_ar.length == 1) {
      r_coef_num = r_coef_ar[0].substring(0,r_coef_ar[0].length-1);
      if(r_coef_num == "" || r_coef_num == "+" || r_coef_num == "-") {
         r_coef_num = "" + r_coef_num + "1";
      }
      r_coef += Number(r_coef_num);
   }


      if(l_cons_ar.length > 1 || r_cons_ar.length > 1 || l_coef_ar.length > 1 || r_coef_ar.length > 1) {

         tbl += "<tr><td class='ChartTextCellLeft'>Combining like terms ";



         var like_term_txt = "";
         if(l_coef_ar.length > 0) {
            like_term_txt += "" + Number(l_coef) + "" + v_variable + "";
            if(l_coef_ar.length > 1) {
               tbl += " (" + l_coef_ar + ") ";
            }
         }
         if(l_cons_ar.length > 0) {
            if(l_cons > 0) {
               like_term_txt += "+" + Number(l_cons) + "";
            } else {
               like_term_txt += "" + Number(l_cons) + "";
            }

            if(l_cons_ar.length > 1) {
               tbl += " (" + l_cons_ar + ") ";
            }
         }
         like_term_txt += "=";
         if(r_coef_ar.length > 0) {
            like_term_txt += "" + Number(r_coef) + "" + v_variable + "";
            if(r_coef_ar.length > 1) {
               tbl += " (" + r_coef_ar + ") ";
            }
         }
         if(r_cons_ar.length > 0) {
            if(r_cons > 0) {
               like_term_txt += "+" + Number(r_cons) + "";
            } else {
               like_term_txt += "" + Number(r_cons) + "";
            }

            if(r_cons_ar.length > 1) {
               tbl += " (" + r_cons_ar + ") ";
            }
         }

         tbl += " on both sides of the above equation leaves: </td>";
         tbl += "<td class='ChartTextCell'>" + like_term_txt + "";

         tbl += "</td></tr>";


      }



      if(l_coef != 0 && r_coef != 0) {
         if(r_coef > 0) {
            l_coef = Number(l_coef) - Number(Math.abs(r_coef));
            tbl += "<tr><td class='ChartTextCellLeft'>Subtracting " + Number(Math.abs(r_coef)) + "" + v_variable + " from ";
            tbl += "both sides of the above equation leaves:</td>";
            tbl += "<td class='ChartTextCell'>";
            tbl += "" + write_equat(l_coef,l_cons,0,r_cons,v_variable) + "";

            tbl += "</td></tr>";
         } else {
            l_coef = Number(l_coef) + Number(Math.abs(r_coef));
            tbl += "<tr><td class='ChartTextCellLeft'>Adding " + Number(Math.abs(r_coef)) + "" + v_variable + " to ";
            tbl += "both sides of the above equation leaves:</td>";
            tbl += "<td class='ChartTextCell'>";
            tbl += "" + write_equat(l_coef,l_cons,0,r_cons,v_variable) + "";

            tbl += "</td></tr>";
         }
         r_coef = 0;



      }




      if(l_cons != 0 && r_cons != 0) {
         if(l_coef != 0) {

            if(l_cons > 0) {
               r_cons = Number(r_cons) - Number(Math.abs(l_cons));
               tbl += "<tr><td class='ChartTextCellLeft'>Subtracting " + Number(Math.abs(l_cons)) + " from both ";
               tbl += "sides of the above equation leaves:</td>";
               tbl += "<td class='ChartTextCell'>";
               tbl += "" + write_equat(l_coef,0,r_coef,r_cons,v_variable) + "";
               tbl += "</td></tr>";
            } else {
               r_cons = Number(r_cons) + Number(Math.abs(l_cons));
               tbl += "<tr><td class='ChartTextCellLeft'>Adding " + Number(Math.abs(l_cons)) + " to both ";
               tbl += "sides of the above equation leaves:</td>";
               tbl += "<td class='ChartTextCell'>";
               tbl += "" + write_equat(l_coef,0,r_coef,r_cons,v_variable) + "";
               tbl += "</td></tr>";
            }        
            l_cons = 0;
         } else {
            if(r_cons > 0) {
               l_cons = Number(l_cons) - Number(Math.abs(r_cons));
               tbl += "<tr><td class='ChartTextCellLeft'>Subtracting " + Number(Math.abs(r_cons)) + " from both ";
               tbl += "sides of the above equation leaves:</td>";
               tbl += "<td class='ChartTextCell'>";
               tbl += "" + write_equat(l_coef,l_cons,r_coef,0,v_variable) + "";
               tbl += "</td></tr>";
            } else {
               l_cons = Number(l_cons) + Number(Math.abs(r_cons));
               tbl += "<tr><td class='ChartTextCellLeft'>Adding " + Number(Math.abs(r_cons)) + " to both ";
               tbl += "sides of the above equation leaves:</td>";
               tbl += "<td class='ChartTextCell'>";
               tbl += "" + write_equat(l_coef,l_cons,r_coef,0,v_variable) + "";
               tbl += "</td></tr>";
            }
            r_cons = 0;
         }
      }




      var v_ans = "";
      var red_tbl = "";


      if(l_coef == 0 && r_coef == 0) {
         tbl += "<tr><td class='ChartTextCellLeft'>Result:</td><td class='ChartTextCell'>";
         if(l_cons == r_cons) {
            v_ans = "" + v_variable + " = All Real Numbers";
            tbl += "" + v_variable + " = All Real Numbers";
         } else {
            v_ans = "No Solution";
            tbl += "No Solution";
         }
         tbl += "</td></tr>";

      } else

      if(l_coef != 0) {

         tbl += "<tr><td class='ChartTextCellLeft'>Divide both sides of the above equation by " + l_coef + ": </td><td class='ChartTextCell'>";
         tbl += "<center><table><tr><td style='border-bottom: 1px solid #000; text-align: center;'>" + l_coef + "" + v_variable + "</td>"; 
         tbl += "<td rowspan='2' style='vertical-align: middle'>=</td>"; 
         tbl += "<td style='text-align: center; border-bottom: 1px solid #000''>" + r_cons + "</td></tr>";
         tbl += "<tr><td style='text-align: center;'>" + l_coef + "</td>"; 
         tbl += "<td style='text-align: center;'>" + l_coef + "</td></tr></table></center></td></tr>";

         tbl += "<tr><td class='ChartTextCellLeft'>Result: </td><td class='ChartTextCell'>";
         if(r_cons % l_coef == 0) {
            r_cons = r_cons / l_coef;
            tbl += "" + v_variable + " = " + r_cons + ""; 
            document.calc.ans.value = "" + v_variable + " = " + r_cons + "";

         } else {
            tbl += "" + reduce_fract(r_cons,l_coef,v_variable) + "";
         }

         tbl += "</td></tr>";

      } else {
         tbl += "<tr><td class='ChartTextCellLeft'>Divide both sides of the above equation by " + r_coef + ": </td><td class='ChartTextCell'>";
         tbl += "<center><table><tr><td style='border-bottom: 1px solid #000; text-align: center;'>" + l_cons + "</td>"; 
         tbl += "<td rowspan='2' style='vertical-align: middle'>=</td>"; 
         tbl += "<td style='text-align: center; border-bottom: 1px solid #000''>" + r_coef + "" + v_variable + "</td></tr>";
         tbl += "<tr><td style='text-align: center;'>" + r_coef + "</td>"; 
         tbl += "<td style='text-align: center;'>" + r_coef + "</td></tr></table></center></td></tr>";

         tbl += "<tr><td class='ChartTextCellLeft'>Result: </td><td class='ChartTextCell'>";
         if(l_cons % r_coef == 0) {
            l_cons = l_cons / r_coef;
            tbl += "" + l_cons + " = " + v_variable + ""; 
            document.calc.ans.value = "" + l_cons + " = " + v_variable + "";

         } else {
            tbl += "" + reduce_fract(l_cons,r_coef,v_variable) + "";
         }

         tbl += "</td></tr>";
         
      }

      tbl += "</table></center><br /><br />";



      document.getElementById("summary").innerHTML = tbl;

   }
}

function write_equat(lf,lc,rf,rc,v) {

   var equat_txt = ""

   var left_cnt = 0;
   if(lf != 0) {
      left_cnt += 1;
   }
   if(lc != 0) {
      left_cnt += 1;
   }

   var right_cnt = 0;
   if(rf != 0) {
      right_cnt += 1;
   }
   if(rc != 0) {
      right_cnt += 1;
   }

   if(lf != 0) {
      equat_txt += "" + Number(lf) + "" + v + "";
   }
   if(lc != 0) {
      if(lc > 0 && left_cnt > 1) {
         equat_txt += "+" + Number(lc) + "";
      } else {
         equat_txt += "" + Number(lc) + "";
      }
   }
   equat_txt += "=";
   if(rf !=  0) {
      equat_txt += "" + Number(rf) + "" + v + "";
   }
   if(rc != 0) {
      if(rc > 0 && right_cnt > 1) {
         equat_txt += "+" + Number(rc) + "";
      } else {
         equat_txt += "" + Number(rc) + "";
      }
   }

   return equat_txt;

}

function reduce_fract(numer,denom,v) {

      var sign = "";

      if(numer < 0 && denom < 0) {

         numer = Math.abs(numer);
         denom = Math.abs(denom);

      } else
      if(numer < 0 || denom < 0) {
         numer = Math.abs(numer);
         denom = Math.abs(denom);
         sign = "-";
      }


      var max_gcf = 0;
      if(numer > denom) {
         max_gcf = numer;
      } else
      if(denom > numer) {
         max_gcf = denom;
      } else {
         max_gcf = 1;
      }

      var v_gfc = 1;
      var cnt = max_gcf;
      var mult_chk = 0

      while(cnt > 0) {

         if(numer % cnt == 0 && denom % cnt == 0 && mult_chk == 0) {

            v_gcf = cnt;
            mult_chk = 1;

         }

         cnt --;

      }

      var v_red_numer = numer / v_gcf;
      var v_red_denom = denom / v_gcf;

      document.calc.ans.value = "" + v + " = " + sign + "" + v_red_numer + "/" + v_red_denom + "";

      var numer_style = "style='border-bottom: 1px solid black; text-align: center; font-weight: normal;'";
      var equal_style = "style='vertical-align: middle; text-align: center; font-weight: normal;'";
      var whole_style = "style='vertical-align: middle; text-align: center; font-weight: normal; font-size: 18pt;'";

      var rtbl = "<center><table>";
      rtbl += "<tr>";
      rtbl += "<td rowspan='2' " + equal_style + ">" + v + "</td>";
      rtbl += "<td rowspan='2' " + equal_style + ">=</td>";
      rtbl += "<td rowspan='2' " + equal_style + ">" + sign + "</td>";
      rtbl += "<td " + numer_style + ">" + numer + "</td>";
      if(v_gcf > 1) {
         rtbl += "<td rowspan='2' " + equal_style + ">=</td>";
         rtbl += "<td rowspan='2' " + equal_style + ">" + sign + "</td>";
         rtbl += "<td " + numer_style + ">" + numer + " &divide " + v_gcf + "</td>";
         rtbl += "<td rowspan='2' " + equal_style + ">=</td>";
         rtbl += "<td rowspan='2' " + equal_style + ">" + sign + "</td>";
         rtbl += "<td " + numer_style + ">" + v_red_numer + "</td>";
      }
      if(numer > denom) {

         var whole_num = Math.floor(v_red_numer / v_red_denom);
         var mixed_numer = v_red_numer % v_red_denom;
         rtbl += "<td rowspan='2' " + equal_style + "> or </td>";
         rtbl += "<td rowspan='2' " + equal_style + ">" + sign + "</td>";
         rtbl += "<td rowspan='2' " + whole_style + ">" + whole_num + "</td>";
         if(mixed_numer > 0) {
            rtbl += "<td " + numer_style + ">" + mixed_numer + "</td>";
         }
      }

      rtbl += "</tr>";

      rtbl += "<tr>";
      rtbl += "<td style='text-align: center; font-weight: normal;'>" + denom + "</td>";
      if(v_gcf > 1) {
         rtbl += "<td style='text-align: center; font-weight: normal;'>" + denom + " &divide " + v_gcf + "</td>";
         rtbl += "<td style='text-align: center; font-weight: normal;'>" + v_red_denom + "</td>";
      }
      if(numer > denom) {
         if(mixed_numer > 0) {
            rtbl += "<td style='text-align: center; font-weight: normal;'>" + v_red_denom + "</td>";
         }
      }
      rtbl += "</tr>";

      rtbl += "</table></center>";



      return rtbl;

}

function clear_results(form) {

   document.calc.ans.value = "";

   document.getElementById("summary").innerHTML = "";

}

function reset_calc(form) {

   document.getElementById("summary").innerHTML = "";

   document.calc.reset();

}