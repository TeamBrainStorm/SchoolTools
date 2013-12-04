function init()
  {
   var i;
    
   for(i = 0; i < arraySize; i++)
     reacEqnArray[i] = new Array(arraySize);
   
   document.forms[0].elements[1].value = "SO2";
   document.forms[0].elements[2].value = "2.2 x 10^20"; 
   document.forms[0].elements[0].focus(); 
  }
  
function calcValues()
  {
   initReacValueIndex = -1;
   initProdValueIndex = -1;
   reactantMasses();
   productMasses();
   if(inputInitialValue())
     {
      checkInputUnits();
      checkOutputUnits();
      calcProdValues();
      output();
      document.faceHolder.src = "happy.gif";
      document.faceHolder1.src = "happy.gif";
     }
   else
     alert("\nMust Enter Only One Reactant Amount"); 
  }

function reactantMasses()
  {
   var i,j;
   var char,subscript,workVar,workVar1;
  
   for(i = 0; i < reactantPlusSign+1; i++)
     {
      workVar = 0;
      
      for(j = 0; j < reactantArray[i].length; j++)
        {
         char = reactantArray[i].charAt(j);
         
         if(j == 0)
           {
            if(isANumber(char))
              {
               reacCoefficientArray[i] = char;
               
               for(;;)
                 {
                  if(isANumber(reactantArray[i].charAt(j+1)))
                    {
                     reacCoefficientArray[i] += reactantArray[i].charAt(j+1);
                     j++;
                    }
                  else
                    break;
                 }
              }
            else
              reacCoefficientArray[i] = 1;
           } 
           
         if(isASmallLetter(reactantArray[i].charAt(j+1)))
           {
            char += reactantArray[i].charAt(j+1);
            j++;
           }
        
         if(isANumber(reactantArray[i].charAt(j+1)))
           {
            subscript = reactantArray[i].charAt(j+1);
            j++;
            
            for(;;)
              {
               if(isANumber(reactantArray[i].charAt(j+1)))
                 {
                  subscript += reactantArray[i].charAt(j+1);
                  j++;
                 }
               else
                 break;
              }
           }
         else
           subscript = 1;
        
         workVar1 = searchElement(char);
         
         if(workVar1 > 0)
           workVar += workVar1 * subscript;
        }
        
      reactantValueArray[i] = workVar;
     }
  } 

function productMasses()
  {
   var i,j;
   var char,subscript,workVar,workVar1;
   
   for(i = 0; i < productPlusSign+1; i++)
     {
      workVar = 0;
      
      for(j = 0; j < productArray[i].length; j++)
        {
         char = productArray[i].charAt(j);
         
         if(j == 0)
           {
            if(isANumber(char))
              {
               prodCoefficientArray[i] = char;
               
               for(;;)
                 {
                  if(isANumber(productArray[i].charAt(j+1)))
                    {
                     prodCoefficientArray[i] += productArray[i].charAt(j+1);
                     j++;
                    }
                  else
                    break;
                 }
              }
            else
              prodCoefficientArray[i] = 1;
           } 
           
         if(isASmallLetter(productArray[i].charAt(j+1)))
           {
            char += productArray[i].charAt(j+1);
            j++;
           }
        
         if(isANumber(productArray[i].charAt(j+1)))
           {
            subscript = productArray[i].charAt(j+1);
            j++;
            
            for(;;)
              {
               if(isANumber(productArray[i].charAt(j+1)))
                 {
                  subscript += productArray[i].charAt(j+1);
                  j++;
                 }
               else
                 break;
              }
           }
         else
           subscript = 1;
        
         workVar1 = searchElement(char);
         
         if(workVar1 > 0)
           workVar += workVar1 * subscript;
        }
        
      productValueArray[i] = workVar;
     }
  } 
  
function searchElement(char)
  {
   for(var i = 0; i < elementArray.length; i+=2)
     {
      if(char == elementArray[i])
        return(elementArray[i+1]);
     }
     
   return(-1);
  }

function inputInitialValue()
  {
   var i;
   var reacEntered = 0,prodEntered = 0;
   
   for(i = 2; i <= document.forms[0].elements.length-3; i+=4)
     {
      if(document.forms[0].elements[i].value != "")
        {
         ++reacEntered;
         initReacValueArray[i-reacOffSetArray[i]] = reformatExponent(document.forms[0].elements[i].value);
         initReacValueIndex = i-reacOffSetArray[i];
        }
     }
     
   for(i = 4; i <= document.forms[0].elements.length-1; i+=4)
     {
      if(document.forms[0].elements[i].value != "")
        {
         ++prodEntered;
         initProdValueArray[i-prodOffSetArray[i]] = document.forms[0].elements[i].value;
         initProdValueIndex = i-prodOffSetArray[i];
        }
     }
     
   if(reacEntered == 1 && prodEntered == 0)
     return(true);
   else
     return(false);
  }

function reformatExponent(workVar)
  {
   var workVar1,workVar2,workVar3,workVar4;
   
   workVar4 = workVar.indexOf("^");
   
   if(workVar4 < 0)
     return workVar;
     
   workVar2 = workVar.indexOf(" ");
   workVar3 = workVar.substring(0,workVar2);
   workVar3 += "e";
   
   workVar2 = workVar.substring(workVar4+1,workVar.length); 
   workVar3 += workVar2;
   return(workVar3);
  }
  
function checkInputUnits()
  {
   if(inputUnit > 1)
     reactantValueArray[initReacValueIndex] = unitArray[inputUnit];
  } 
  
function checkOutputUnits()
  {
   var i;
  
   if(outputUnit > 1)
     {
      for(i = 0; i < reactantPlusSign+1; i++)
        {
         if(i == initReacValueIndex)
           continue;
           
         reactantValueArray[i] = unitArray[outputUnit];
        }
        
      for(i = 0; i < productPlusSign+1; i++)
        {
         if(i == initProdValueIndex)
           continue;
           
         productValueArray[i] = unitArray[outputUnit];
        }
     }
  }

function calcProdValues()
  {
   var i;
   var workVar,workVar1;
   
   if(initProdValueIndex >= 0)
     return;
  
   for(i = 0; i < reactantPlusSign+1; i++)
     {
      if(i == initReacValueIndex)
        continue;
        
      workVar = initReacValueArray[initReacValueIndex];
      
      if(inputUnit != 1)
        workVar /= reactantValueArray[initReacValueIndex];
      
      workVar *= reacCoefficientArray[i];
      workVar /= reacCoefficientArray[initReacValueIndex];
      
      if(outputUnit != 1)
        workVar *= reactantValueArray[i];
      
      workVar = workVar.toString();
      workVar1 = workVar.indexOf("e-");
      
      if(workVar1 >= 0)
        reactantValueArray[i] = negativeExponent(workVar,workVar1);
      else
        {
         if(workVar > 100000)
           {
            workVar = Math.round(workVar);
            reactantValueArray[i] = extractExponent(workVar.toString());
           }
         else
           {
            if(workVar < 1)
              reactantValueArray[i] = lessThanOne(workVar);    
            else
              reactantValueArray[i] = applyDecPlaces(workVar.toString(),2);
           }
        }   
     }
      
   for(i = 0; i < productPlusSign+1; i++)
     {
      workVar = initReacValueArray[initReacValueIndex];
      
      if(inputUnit != 1)
        workVar /= reactantValueArray[initReacValueIndex];
        
      workVar *= prodCoefficientArray[i];
      workVar /= reacCoefficientArray[initReacValueIndex];
      
      if(outputUnit != 1)
        workVar *= productValueArray[i];
      
      workVar = workVar.toString();
      workVar1 = workVar.indexOf("e-");
      
      if(workVar1 >= 0)
        productValueArray[i] = negativeExponent(workVar,workVar1);
      else
        {
         if(workVar > 100000)
           {
            workVar = Math.round(workVar);
            productValueArray[i] = extractExponent(workVar.toString());
           }
         else
           {
            if(workVar < 1)
              productValueArray[i] = lessThanOne(workVar);    
            else
              productValueArray[i] = applyDecPlaces(workVar.toString(),2);
           }
        }
     }
  }

function negativeExponent(workVar,workVar1)
  {
   var workVar2;
   
   workVar2 = workVar.substring(workVar1,workVar.length);
   workVar = workVar.substring(0,workVar1);
   workVar = applyDecPlaces(workVar,2);
   workVar += workVar2;
   return(workVar);
  }

function lessThanOne(workVar)
  {
   var j;
   var decPos,workVar1,workVar2 = "",zeroCount = 0;
   
   decPos = workVar.indexOf(".");
               
   for(j = decPos+1; j < workVar.length; j++)
     {
      if(workVar.charAt(j) == 0)
        ++zeroCount;
      else
        break;
     }
                 
   workVar1 = workVar.substring(decPos+zeroCount+1,workVar.length);
               
   for(j = 0; j < workVar1.length; j++)
     {
      workVar2 += workVar1.charAt(j);
                  
      if(j == 0)
        workVar2 += ".";
     }
                 
   workVar = applyDecPlaces(workVar2,2);
   workVar += "e-";
   workVar += zeroCount + 1;
   return(workVar);
  }
      
function calcReacValues()
  {
   var i;
   var workVar;
  
   if(initReacValueIndex >= 0)
     return;
     
   for(i = 0; i < reactantPlusSign+1; i++)
     {
      workVar = initProdValueArray[initProdValueIndex];
      workVar /= productValueArray[initProdValueIndex];
      workVar *= reacCoefficientArray[i];
      workVar /= prodCoefficientArray[initProdValueIndex];
      if(outputUnit != 1)
        workVar *= reactantValueArray[i];
      reactantValueArray[i] = applyDecPlaces(workVar.toString(),2);  
     }
     
   for(i = 0; i < productPlusSign+1; i++)
     {
      if(i == initProdValueIndex)
        continue;
          
      workVar = initProdValueArray[initProdValueIndex];
      workVar /= productValueArray[initProdValueIndex];
      workVar *= prodCoefficientArray[i];
      workVar /= prodCoefficientArray[initProdValueIndex];
      if(outputUnit != 1)
        workVar *= productValueArray[i];
      productValueArray[i] = applyDecPlaces(workVar.toString(),2);
     } 
  }

function extractExponent(workVar)
  {
   var expPos,negExp = false,workVar1,workVar2;
  
   expPos = workVar.indexOf("e");
   
   if(expPos < 0)
     {
      workVar = formatExponent(workVar);
      expPos = workVar.indexOf("e");  
      if(workVar.charAt(expPos+1) == "-")
        negExp = true;
     }
    
   workVar2 = workVar.substring(expPos+2,workVar.length);
   
   if(negExp)
     workVar1 = " x 10^ -"+workVar2;
   else
     workVar1 = " x 10^"+workVar2;
   
   workVar = workVar.substring(0,expPos);
   workVar = applyDecPlaces(workVar,2);
   
   return(workVar += workVar1);
  }

function formatExponent(workVar)
  {
   var i;
   var workVar2 = "",zeroCount = 0;
   
   if(workVar < 1)
     return(formatNegExponent(workVar));
       
   for(i = workVar.length-1; i >= 0; i--)
     {
      if(workVar.charAt(i) == 0)
        ++zeroCount;
      else
        break;
     }
    
   workVar1 = workVar.substring(0,workVar.length-zeroCount);
   
   for(i = 0; i < workVar.length; i++)
     {
      if(i == 1)
        workVar2 += ".";
        
      workVar2 += workVar.charAt(i);
     }
   
   workVar2 = applyDecPlaces(workVar2,2);
   workVar2 += "e+";
   workVar2 += workVar.length-1;
   return(workVar2);
  }

function formatNegExponent(workVar)
  {
   var i;
   var workVar2 = "",zeroCount = 0;
       
   for(i = 2; i < workVar.length; i++)
     {
      if(workVar.charAt(i) == 0)
        ++zeroCount;
      else
        break;
     }
    
   workVar1 = workVar.substring(zeroCount+2,workVar.length);
   
   for(i = 0; i < workVar1.length; i++)
     {
      if(i == 1)
        workVar2 += ".";
        
      workVar2 += workVar1.charAt(i);
     }
   
   workVar2 = applyDecPlaces(workVar2,2);
   workVar2 += "e-";
   workVar2 += zeroCount+1;
   return(workVar2);
  }
            
function output()
  { 
   var i,j,k = 1;
   var char,letterFound,workVar;
   
   for(i = 0; i < reactantPlusSign+1; i++)
     {
      letterFound = false;
      
      if(document.forms[0].elements[k].value != "")
        {
         k += 4;
         continue;
        }
           
      for(j = 0; j < outputReactantArray[i].length; j++)
        {  
         char = outputReactantArray[i].charAt(j);
         
         if(isANumber(char) && !letterFound)
           continue;
         else
           {
            letterFound = true;
            document.forms[0].elements[k].value += char;
           }
           
        }
      
      workVar = reactantValueArray[i].indexOf("e");
      
      if(workVar >= 0)
        document.forms[0].elements[k+1].value = changeToSciNot(reactantValueArray[i],workVar);
      else
        document.forms[0].elements[k+1].value = reactantValueArray[i];  
        
      k += 4;
     }
   
   k = 3;
    
   for(i = 0; i < productPlusSign+1; i++)
     {
      letterFound = false;
      
      if(document.forms[0].elements[k].value != "")
        {
         k += 4;
         continue;
        }
       
      for(j = 0; j < outputProductArray[i].length; j++)
        {
         char = outputProductArray[i].charAt(j);
         
         if(isANumber(char) && !letterFound)
           continue;
         else
           {
            letterFound = true;
            document.forms[0].elements[k].value += char;
           }
           
        }
      
      workVar = productValueArray[i].indexOf("e");
      
      if(workVar >= 0)
        document.forms[0].elements[k+1].value = changeToSciNot(productValueArray[i],workVar); 
      else
        document.forms[0].elements[k+1].value = productValueArray[i]; 
         
      k += 4;
     }     
  }

function changeToSciNot(workVar1,workVar2)
  {
   var workVar3,workVar4;
   
   workVar3 = workVar1.substring(workVar2+2,workVar1.length);
   workVar4 = workVar1.substring(0,workVar2);
   workVar4 += " x 10^";
   if(workVar1.charAt(workVar2+1) == "-")
     workVar4 += "-";
     
   return(workVar4 += workVar3);
  }
       
function checkInputs()
  {
   if(validateInput())
     {
      storeInputs();
      parseReactants();
      calcValues();
     }
   else
     {
      alert("\nInvalid Input");
      document.forms[0].elements[0].focus();
     }
  }
  
function validateInput()
  {
   var input = document.forms[0].elements[0].value;
   
   productPlusSign = 0;
   reactantPlusSign = 0;
   
   if(input.charAt(0) == " ")
     return false;
   
   arrowPos = input.indexOf("->");
   
   for(i = 0; i < arrowPos; ++i)
     {
      if(input.charAt(i) == "+")
        plusPosReactantArray[reactantPlusSign++] = i;
     }
   
   if(input.charAt(arrowPos-1) != " " || input.charAt(arrowPos+2) != " ")
     return false;
   
   for(i = 0; i < reactantPlusSign; i++)
     {
      if(input.charAt(plusPosReactantArray[i]-1) != " " || input.charAt(plusPosReactantArray[i]+1) != " ")
        return false;
     }
   
   if(input.charAt(arrowPos+2) != " ")
     return false;
   
   plusSign = 0;
   
   for(i = arrowPos+3; i < input.length-1; ++i)
     {
      if(input.charAt(i) == "+")
        plusPosProductArray[productPlusSign++] = i;
     }
   
   for(i = 0; i < productPlusSign; i++)
     {
      if(input.charAt(plusPosProductArray[i]-1) != " " || input.charAt(plusPosProductArray[i]+1) != " ")
        return false;
     }
     
   return true;
  }

function storeInputs()
  {
   var i = 0;
   var input = document.forms[0].elements[0].value;
  
   for(var j = 0; j < reactantPlusSign+1; j++)
     {
      reactantArray[j] = "";
      
      for(; i < arrowPos; i++)
        {
         var char = input.charAt(i);
         
         if(char != " ")
           reactantArray[j] += char;
         else
           {
            i = plusPosReactantArray[j]+2;
            break;
           }
        }
      
      outputReactantArray[j] = reactantArray[j]; 
     }
    
    parseReacParens();
   
    i = arrowPos+3;
    
    for(j = 0; j < productPlusSign+1; j++)
      {
       productArray[j] = "";
      
       for(; i < input.length; i++)
         {
          char = input.charAt(i);
         
          if(char != " ")
            productArray[j] += char;
          else
            {
             i = plusPosProductArray[j]+2;
             break;
            }
         }
         
       outputProductArray[j] = productArray[j];
      }
      
    parseProdParens();
  } 

function parseReacParens()
  {
   var i,j,k;
   var parenLeft,parenRight;
   var sub;
   var workVar,workVar1;
   
   for(i = 0; i < reactantPlusSign+1; i++)
     {
      parenLeft = reactantArray[i].indexOf("(");
      
      if(parenLeft >= 0)
        parenRight = reactantArray[i].indexOf(")");
      else
        continue;
        
      sub = reactantArray[i].charAt(parenRight+1);
      sub = parseInt(sub);
      
      if(parenLeft == 0)
        {
         workVar = "";
         
         for(j = 1; j < reactantArray[i].length; j++)
           {
            if(reactantArray[i].charAt(j) == ")")
              {
               j++;
               continue;
              }
              
            workVar += reactantArray[i].charAt(j);
            
            if(isASmallLetter(reactantArray[i].charAt(j+1)))
              {
               workVar += reactantArray[i].charAt(j+1);
               j++;
              }
           
            if(isANumber(reactantArray[i].charAt(j+1)) && j < parenRight)
              {
               workVar1 = reactantArray[i].charAt(j+1);
               workVar1 = parseInt(workVar1);
            
               workVar1 *= sub;
               workVar1 = ""+workVar1;
               workVar += workVar1;
               j++;
              }
            else
              {
               if(j < parenRight)
                 workVar += sub.toString();
              } 
           }
        }
      else
        {  
         workVar = reactantArray[i].substring(0,parenLeft);
         j = parenRight-parenLeft-1;
       
         for(k = 0; k < j; k++)
           {
            if(reactantArray[i].charAt(parenLeft+1+k) == ")")
              continue;
         
            workVar += reactantArray[i].charAt(parenLeft+1+k);
            
            if(isASmallLetter(reactantArray[i].charAt(parenLeft+2+k)))
              {
               workVar += reactantArray[i].charAt(parenLeft+2+k);
               k++;
              }
           
            if(isANumber(reactantArray[i].charAt(parenLeft+2+k)))
              {
               workVar1 = reactantArray[i].charAt(parenLeft+2+k);
               workVar1 = parseInt(workVar1);
            
               workVar1 *= sub;
               workVar1 = ""+workVar1;
               workVar += workVar1;
               k++;
              }
            else
              workVar += sub.toString();
           }  
        }
        
      reactantArray[i] = workVar;
     }
  }
  
function parseReactants()
  {
   var char;
   var i,j,k,m;
   
   for(i = 0; i < arraySize; i++)
     for(j = 0; j < arraySize; j++)
       reacEqnArray[i][j] = 0;
     
   reacEqnArrayIndex = 0;
   simEqnArrayIndex = 0;
   storeReacCount = 0;
   storeProdCount = 0;
   
   for(j = 0; j < reactantPlusSign+1; j++)
     {  
      for(i = 0; i < reactantArray[j].length; i++)
        {
         k = 0;
            
         char = reactantArray[j].charAt(i);
         
         if(isASmallLetter(reactantArray[j].charAt(i+1)))
           {
            char += reactantArray[j].charAt(i+1);
            ++k;
           } 
          
         for(m = i+k+1; m < reactantArray[j].length; m++)
           {
            if(isANumber(reactantArray[j].substring(m,m+1)))
              ++k;
            else
              break;
           }
         
         searchReactants(char,j+i);
         searchProducts(char,j+i);
             
         i += k;
        }
     }
   
   arrayWidth = reactantPlusSign + productPlusSign + 1;
   
   for(j = 0; j < arrayWidth; j++)
     reacEqnArray[simEqnArrayIndex][reacEqnArrayIndex++] = 0;
   
   reacEqnArray[simEqnArrayIndex++][reacEqnArrayIndex] = -1;
  }

function searchReactants(char,time) 
  {
   var count;
   var i,j,k,m;
   var workVar,workVar1,workVar2;
        
   if(time == 0)
     {
      if(char.length == 1)  
        storeReacArray[storeReacCount++] = char;
      else
        {
         workVar = char.charAt(0);
         
         if(!isANumber(char.charAt(1)))
           workVar += char.charAt(1);
         
         storeReacArray[storeReacCount++] = workVar;
        }
     }
     
   if(time)
     {
      for(l = 0; l < storeReacCount; ++l)
        {
         if(storeReacArray[l] == char)
           return;
        }
      
      if(char.length == 1)  
        storeReacArray[storeReacCount++] = char;
      else
        {
         workVar = char.charAt(0);
         
         if(!isANumber(char.charAt(1)))
           workVar += char.charAt(1);
         
         for(l = 0; l < storeReacCount; ++l)
           {
            if(storeReacArray[l] == workVar)
              return;
           }
          
         storeReacArray[storeReacCount++] = workVar;
        }
     } 
    
   for(j = 0; j < reactantPlusSign+1; j++)
     {
      count = 0;
     
      for(i = 0; i < reactantArray[j].length; i++)
        {
         k = 0;
         
         workVar = reactantArray[j].charAt(i);
          
         if(isASmallLetter(reactantArray[j].charAt(i+1)))
           {
            workVar += reactantArray[j].charAt(i+1);
            ++k;
           } 
           
         if(workVar == char)
           {
            workVar2 = "";
            
            for(m = i+k+1; m < reactantArray[j].length; m++)
              {
               if(isANumber(reactantArray[j].substring(m,m+1)))
                 workVar2 += reactantArray[j].substring(m,m+1);
               else
                 break;
              }
               
            if(workVar2 == "")
              workVar2 = 1;
            else
              workVar2 = parseInt(workVar2);
              
            count += workVar2;   
           }
           
         i += k;
        }
      
      reacEqnArray[simEqnArrayIndex][reacEqnArrayIndex++] = count;
     }
  }

function parseProdParens()
  {
   var i,j,k;
   var parenLeft,parenRight;
   var sub;
   var workVar,workVar1;
   
   for(i = 0; i < productPlusSign+1; i++)
     {
      parenLeft = productArray[i].indexOf("(");
      
      if(parenLeft >= 0)
        parenRight = productArray[i].indexOf(")");
      else
        continue;
        
      sub = productArray[i].charAt(parenRight+1);
      sub = parseInt(sub);
      
      if(parenLeft == 0)
        {
         workVar = "";
         
         for(j = 1; j < productArray[i].length; j++)
           {
            if(productArray[i].charAt(j) == ")")
              {
               j++;
               continue;
              }
              
            workVar += productArray[i].charAt(j);
            
            if(isASmallLetter(productArray[i].charAt(j+1)))
              {
               workVar += productArray[i].charAt(j+1);
               j++;
              }
           
            if(isANumber(productArray[i].charAt(j+1)) && j < parenRight)
              {
               workVar1 = productArray[i].charAt(j+1);
               workVar1 = parseInt(workVar1);
            
               workVar1 *= sub;
               workVar1 = ""+workVar1;
               workVar += workVar1;
               j++;
              }
            else
              {
               if(j < parenRight)
                 workVar += sub.toString();
              } 
           }
        }
      else
        {  
         workVar = productArray[i].substring(0,parenLeft);
         j = parenRight-parenLeft-1;
       
         for(k = 0; k < j; k++)
           {
            if(productArray[i].charAt(parenLeft+1+k) == ")")
              continue;
         
            workVar += productArray[i].charAt(parenLeft+1+k);
            
            if(isASmallLetter(productArray[i].charAt(parenLeft+2+k)))
              {
               workVar += productArray[i].charAt(parenLeft+2+k);
               k++;
              }
           
            if(isANumber(productArray[i].charAt(parenLeft+2+k)))
              {
               workVar1 = productArray[i].charAt(parenLeft+2+k);
               workVar1 = parseInt(workVar1);
            
               workVar1 *= sub;
               workVar1 = ""+workVar1;
               workVar += workVar1;
               k++;
              }
            else
              workVar += sub.toString();
           }  
        }
        
      productArray[i] = workVar;
     }
  }

function searchProducts(char,time)
  {
   var count;
   var i,j,k,m;
   var workVar,workVar1,workVar2;
        
   if(time == 0)
     {
      if(char.length == 1)  
        storeProdArray[storeProdCount++] = char;
      else
        {
         workVar = char.charAt(0);
         
         if(!isANumber(char.charAt(1)))
           workVar += char.charAt(1);
         
         storeProdArray[storeProdCount++] = workVar;
        }
     }
     
   if(time)
     {
      for(l = 0; l < storeProdCount; ++l)
        {
         if(storeProdArray[l] == char)
           return;
        }
      
      if(char.length == 1)  
        storeProdArray[storeProdCount++] = char;
      else
        {
         workVar = char.charAt(0);
         
         if(!isANumber(char.charAt(1)))
           workVar += char.charAt(1);
         
         for(l = 0; l < storeProdCount; ++l)
           {
            if(storeProdArray[l] == workVar)
              return;
           }
          
         storeProdArray[storeProdCount++] = workVar;
        }
     } 
        
   for(j = 0; j < productPlusSign+1; j++)
     {
      count = 0;
     
      for(i = 0; i < productArray[j].length; i++)
        {
         k = 0;
         
         workVar = productArray[j].charAt(i);
          
         if(isASmallLetter(productArray[j].charAt(i+1)))
           {
            workVar += productArray[j].charAt(i+1);
            ++k;
           } 
         
         if(workVar == char)
           {
            workVar2 = "";
            
            for(m = i+k+1; m < productArray[j].length; m++)
              {
               if(isANumber(productArray[j].substring(m,m+1)))
                 workVar2 += productArray[j].substring(m,m+1);
               else
                 break;
              }
               
            if(workVar2 == "")
              workVar2 = 1;
            else
              workVar2 = parseInt(workVar2);
              
            count += workVar2;   
           }
           
         i += k;
        }
        
      reacEqnArray[simEqnArrayIndex][reacEqnArrayIndex++] = -count;
     }
   
   simEqnArrayIndex++;
   reacEqnArrayIndex = 0;
  }
     
function isASmallLetter(char)
  {
   if(char >= "a" && char <= "z")
     return true;
   else
     return false;
  }
  
function isANumber(char)
  { 
   if(char >= "0" && char <= "9")   
     return true;
   else
     return false; 
  }
  
function clearFields(fieldStart)
  {
   var i;
   
   for(i = fieldStart; i < document.forms[0].elements.length; i++)
     document.forms[0].elements[i].value = "";
   
   document.forms[0].elements[fieldStart].focus();
   document.faceHolder.src = "neutral.gif";
   document.faceHolder1.src = "neutral.gif";    
  }
  
function applyDecPlaces(tempAnswer,decPlaces)
  {
   var result = "" + Math.round(tempAnswer * Math.pow(10,decPlaces));
   var decimal = result.length - decPlaces;
  
   if(decPlaces > 0)
     return(result.substring(0,decimal) + "." + result.substring(decimal,result.length));
   else
     return(result);
  }
  
function reverseEquation()
  {
   var workVar,workVar1,workVar2;
   
   workVar = document.forms[0].elements[0].value.indexOf("->");
   workVar1 = document.forms[0].elements[0].value.substring(0,workVar);
   workVar2 = document.forms[0].elements[0].value.substring(workVar+3,document.forms[0].elements[0].value.length);
   document.forms[0].elements[0].value = "";
   document.forms[0].elements[0].value = workVar2;
   document.forms[0].elements[0].value += " -> ";
   document.forms[0].elements[0].value += workVar1;
   document.faceHolder.src = "neutral.gif";
   document.faceHolder1.src = "neutral.gif";
  }