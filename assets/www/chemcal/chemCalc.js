/* This script and many more are available free online at
The JavaScript Source :: http://javascript.internet.com
Created by: Kim Bratzel :: http://kim.ugtech.net/blog */

function NMR() {
  if (document.form.N.value == "")
    document.form.N.value = document.form.M.value/document.form.R.value
  if (document.form.M.value == "")
    document.form.M.value = document.form.N.value*document.form.R.value
  if (document.form.R.value == "")
    document.form.R.value = document.form.M.value/document.form.N.value
}

function CVA() {
  if (document.form.C.value == "")
    document.form.C.value = document.form.A.value/document.form.V.value
  if (document.form.V.value == "")
    document.form.V.value = document.form.C.value*document.form.A.value
  if (document.form.A.value == "")
    document.form.A.value = document.form.V.value*document.form.C.value
}

function clear1() {
  document.form.N.value = ""
  document.form.M.value = ""
  document.form.R.value = ""
}

function clear2() {
  document.form.C.value = ""
  document.form.V.value = ""
  document.form.A.value = ""
}
