package com.d4a.stz;
import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import com.d4a.stz.R;

public class Tools extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.tools);
		
		// Here is code to go grab and layout the Buttons, they're named b1, b2, etc. and identified as such.     
	    Button factor =(Button)findViewById(R.id.Factor);
	    Button area =(Button)findViewById(R.id.Area);
	    Button fcal =(Button)findViewById(R.id.Fcal);
	    Button linear =(Button)findViewById(R.id.linear);
	    Button graph =(Button)findViewById(R.id.graph);
	    //Button equtime =(Button)findViewById(R.id.equtime);
	    
	 // Setup the listeners for the buttons, and the button handler      
	    factor.setOnClickListener(buttonhandler);
	    area.setOnClickListener(buttonhandler);
	    fcal.setOnClickListener(buttonhandler);
	    linear.setOnClickListener(buttonhandler);
	    graph.setOnClickListener(buttonhandler);
	    //equtime.setOnClickListener(buttonhandler);

	}           
    View.OnClickListener buttonhandler=new View.OnClickListener() { 

   // Now I need to determine which button was clicked, and which intent or activity to launch.         
      public void onClick(View v) {
   switch(v.getId()) { 

   
// Now, which button did they press, and take me to that class/activity

   case R.id.Factor:    //<<---- notice end line with colon, not a semicolon
      Intent myIntent1 = new Intent(Tools.this, Factorcal.class);
Tools.this.startActivity(myIntent1);
  break;
   
   case R.id.Area:    //<<---- notice end line with colon, not a semicolon
	      Intent myIntent2 = new Intent(Tools.this, Areacal.class);
	Tools.this.startActivity(myIntent2);
	  break;
   
   case R.id.Fcal:    //<<---- notice end line with colon, not a semicolon
	      Intent myIntent3 = new Intent(Tools.this, FCalulator.class);
	Tools.this.startActivity(myIntent3);
	  break;
	  
   case R.id.linear:    //<<---- notice end line with colon, not a semicolon
	      Intent myIntent4 = new Intent(Tools.this, Linearcal.class);
	Tools.this.startActivity(myIntent4);
	  break;
	  
	  
   case R.id.graph:    //<<---- notice end line with colon, not a semicolon
	      Intent myIntent5 = new Intent(Tools.this, GraphActivity.class);
	Tools.this.startActivity(myIntent5);
	  break;

   //case R.id.equtime:    //<<---- notice end line with colon, not a semicolon
	      //Intent myIntent6 = new Intent(Tools.this, MaximaOnAndroidActivity.class);
	//Tools.this.startActivity(myIntent6);
	  //break;
	  
      } 
   } 
};
  }
  

