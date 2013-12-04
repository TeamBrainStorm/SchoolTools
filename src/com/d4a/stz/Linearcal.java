package com.d4a.stz;

import org.apache.cordova.DroidGap;

import android.app.Activity;
import android.os.Bundle;
import android.view.Menu;
import android.view.Window;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.d4a.stz.R;

public class Linearcal extends Activity {


	 WebView webView;


	    @Override
	    public void onCreate(Bundle savedInstanceState) {

	        super.onCreate(savedInstanceState);
	        requestWindowFeature(Window.FEATURE_NO_TITLE);
	        setContentView(R.layout.linearcal);



	        WebView wv;
	        wv = (WebView) findViewById(R.id.webView);
	        wv.getSettings().setJavaScriptEnabled(true);
	        wv.loadUrl("file:///android_asset/www/linner.html");
	        wv.setWebViewClient(new WebViewClient());


	    }
	}
