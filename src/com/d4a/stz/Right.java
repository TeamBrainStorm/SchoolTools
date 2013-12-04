package com.d4a.stz;

import java.io.InputStream;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;

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

import com.d4a.stz.R;

/*This is for zooming into the right section of the table containing the
 * Post-Transition Metals, Metalloids, Nonmetals, Halogens, and Noble Gases */

public class Right extends Activity {
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.right); // Set view to right.xml
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); // Force
		// landscape
		// mode

		/* Button used to zoom back out to full table view */
		Button zo = (Button) findViewById(R.id.zoomout);
		zo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				finish();
			}
		});
		/* Buttons for the many elements */
		Button B = (Button) findViewById(R.id.B);
		B.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Boron");
			}
		});
		Button C = (Button) findViewById(R.id.C);
		C.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Carbon");
			}
		});
		Button N = (Button) findViewById(R.id.N);
		N.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Nitrogen");
			}
		});
		Button O = (Button) findViewById(R.id.O);
		O.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Oxygen");
			}
		});
		Button F = (Button) findViewById(R.id.F);
		F.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Fluorine");
			}
		});
		Button Ne = (Button) findViewById(R.id.Ne);
		Ne.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Neon");
			}
		});
		Button He = (Button) findViewById(R.id.He);
		He.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Helium");
			}
		});
		Button Al = (Button) findViewById(R.id.Al);
		Al.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Aluminum");
			}
		});
		Button Si = (Button) findViewById(R.id.Si);
		Si.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Silicon");
			}
		});
		Button P = (Button) findViewById(R.id.P);
		P.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Phosphorus");
			}
		});
		Button S = (Button) findViewById(R.id.S);
		S.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Sulfur");
			}
		});
		Button Cl = (Button) findViewById(R.id.Cl);
		Cl.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Chlorine");
			}
		});
		Button Ar = (Button) findViewById(R.id.Ar);
		Ar.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Argon");
			}
		});
		Button Ga = (Button) findViewById(R.id.Ga);
		Ga.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Gallium");
			}
		});
		Button Ge = (Button) findViewById(R.id.Ge);
		Ge.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Germanium");
			}
		});
		Button As = (Button) findViewById(R.id.As);
		As.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Arsenic");
			}
		});
		Button Se = (Button) findViewById(R.id.Se);
		Se.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Selenium");
			}
		});
		Button Br = (Button) findViewById(R.id.Br);
		Br.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Bromine");
			}
		});
		Button Kr = (Button) findViewById(R.id.Kr);
		Kr.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Krypton");
			}
		});
		Button In = (Button) findViewById(R.id.In);
		In.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Indium");
			}
		});
		Button Sn = (Button) findViewById(R.id.Sn);
		Sn.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Tin");
			}
		});
		Button Sb = (Button) findViewById(R.id.Sb);
		Sb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Antimony");
			}
		});
		Button Te = (Button) findViewById(R.id.Te);
		Te.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Tellurium");
			}
		});
		Button I = (Button) findViewById(R.id.I);
		I.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Iodine");
			}
		});
		Button Xe = (Button) findViewById(R.id.Xe);
		Xe.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Xenon");
			}
		});
		Button Tl = (Button) findViewById(R.id.Tl);
		Tl.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Thallium");
			}
		});
		Button Pb = (Button) findViewById(R.id.Pb);
		Pb.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Lead");
			}
		});
		Button Bi = (Button) findViewById(R.id.Bi);
		Bi.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Bismuth");
			}
		});
		Button Po = (Button) findViewById(R.id.Po);
		Po.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Polonium");
			}
		});
		Button At = (Button) findViewById(R.id.At);
		At.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Astatine");
			}
		});
		Button Rn = (Button) findViewById(R.id.Rn);
		Rn.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Radon");
			}
		});
		Button Uut = (Button) findViewById(R.id.Uut);
		Uut.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununtrium");
			}
		});
		Button Uuq = (Button) findViewById(R.id.Uuq);
		Uuq.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununquadium");
			}
		});
		Button Uup = (Button) findViewById(R.id.Uup);
		Uup.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununpentium");
			}
		});
		Button Uuh = (Button) findViewById(R.id.Uuh);
		Uuh.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununhexium");
			}
		});
		Button Uus = (Button) findViewById(R.id.Uus);
		Uus.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununseptium");
			}
		});
		Button Uuo = (Button) findViewById(R.id.Uuo);
		Uuo.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				popup("Ununoctium");
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
	/* Display element data */
	public void popup(final String el) {
		Builder builder = new AlertDialog.Builder(Right.this);
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
					// Error message for mis-written xml node
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
