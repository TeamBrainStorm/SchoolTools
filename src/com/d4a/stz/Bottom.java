package com.d4a.stz;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.Button;

import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;

import com.d4a.stz.R;

import java.io.InputStream;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;


/*This is for zooming into the bottom section of the table */

public class Bottom extends Activity {
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(com.d4a.stz.R.layout.bottom);
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

		Button zo = (Button) findViewById(com.d4a.stz.R.id.zoomout);
		zo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				finish();
			}
		});
		Button Ce = (Button) findViewById(com.d4a.stz.R.id.Ce);
		Ce.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Cerium");
			}
		});
		Button Pr = (Button) findViewById(R.id.Pr);
		Pr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Praseodymium");
			}
		});
		Button Nd = (Button) findViewById(R.id.Nd);
		Nd.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Neodymium");
			}
		});
		Button Pm = (Button) findViewById(R.id.Pm);
		Pm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Promethium");
			}
		});
		Button Sm = (Button) findViewById(R.id.Sm);
		Sm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Samarium");
			}
		});
		Button Eu = (Button) findViewById(R.id.Eu);
		Eu.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Europium");
			}
		});
		Button Gd = (Button) findViewById(R.id.Gd);
		Gd.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Gadolinium");
			}
		});
		Button Tb = (Button) findViewById(R.id.Tb);
		Tb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Terbium");
			}
		});
		Button Dy = (Button) findViewById(R.id.Dy);
		Dy.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Dysprosium");
			}
		});
		Button Ho = (Button) findViewById(R.id.Ho);
		Ho.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Holmium");
			}
		});
		Button Er = (Button) findViewById(R.id.Er);
		Er.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Erbium");
			}
		});
		Button Tm = (Button) findViewById(R.id.Tm);
		Tm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Thulium");
			}
		});
		Button Yb = (Button) findViewById(R.id.Yb);
		Yb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ytterbium");
			}
		});
		Button Lu = (Button) findViewById(R.id.Lu);
		Lu.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Lutetium");
			}
		});
		Button Th = (Button) findViewById(R.id.Th);
		Th.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Thorium");
			}
		});
		Button Pa = (Button) findViewById(R.id.Pa);
		Pa.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Protactinium");
			}
		});
		Button U = (Button) findViewById(R.id.U);
		U.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Uranium");
			}
		});
		Button Np = (Button) findViewById(R.id.Np);
		Np.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Neptunium");
			}
		});
		Button Pu = (Button) findViewById(R.id.Pu);
		Pu.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Plutonium");
			}
		});
		Button Am = (Button) findViewById(R.id.Am);
		Am.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Americium");
			}
		});
		Button Cm = (Button) findViewById(R.id.Cm);
		Cm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Curium");
			}
		});
		Button Bk = (Button) findViewById(R.id.Bk);
		Bk.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Berkelium");
			}
		});
		Button Cf = (Button) findViewById(R.id.Cf);
		Cf.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Californium");
			}
		});
		Button Es = (Button) findViewById(R.id.Es);
		Es.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Einsteinium");
			}
		});
		Button Fm = (Button) findViewById(R.id.Fm);
		Fm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Fermium");
			}
		});
		Button Md = (Button) findViewById(R.id.Md);
		Md.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Mendelvium");
			}
		});
		Button No = (Button) findViewById(R.id.No);
		No.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Nobelium");
			}
		});
		Button Lr = (Button) findViewById(R.id.Lr);
		Lr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Lawrencium");
			}
		});
	}

	public String getParsedMyXML(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();

		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.toString());
		in.close();
		return inLine.toString();

	}

	public String getvidurl(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();

		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.getvid());
		in.close();
		return inLine.toString();

	}

	public void popup(final String el) {
		Builder builder = new AlertDialog.Builder(Bottom.this);
		builder.setTitle(el);
		builder.setIcon(R.drawable.icon);
		OnClickListener web = new OnClickListener() {
			public void onClick(DialogInterface dialog, int which) {
				String url;
				try {
					url = getvidurl(el);
					Intent i = new Intent(Intent.ACTION_VIEW);
					i.setData(Uri.parse(url));
					startActivity(i);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		};

		try {
			builder.setMessage(getParsedMyXML(el));
		} catch (Exception e1) {
			builder.setMessage("epic fail");
		}
		builder.setNegativeButton("Done", null);
		builder.setPositiveButton("Video", web);
		builder.show();
	}
}
