package com.d4a.stz;

import android.text.Html;
import android.text.Spanned;

public class Fraction implements Cloneable, java.io.Serializable {

	private static final long serialVersionUID = -2424842191121403921L;
	protected final double numerator_;
	  protected final double denominator_;
	  public final Spanned n() {
		  if (denominator_ == 1.0) {
			  if (isInteger(numerator_)) {
				  if (numerator_ == 0) {
					  return Html.fromHtml("<p> Slope = "+(int)(numerator_)+"</p> <p> Line is parallel to X-Axis");
				  }
				  return Html.fromHtml("<p> Slope = "+(int)(numerator_)+"</p>");
			  } else {  
			  return Html.fromHtml("<p> Slope = "+String.valueOf(numerator_)+"</p>"); 
			  }
		  } else {
			  if (denominator_ == 0) {
				  return Html.fromHtml("<p> Slope is undefined </p> <p> Line is parallel to Y-Axis</p>");
			  }
			  return Html.fromHtml("<p> Slope = <sup>" + (int)(numerator_) +"</sup>/<sub>" + (int)(denominator_)+"</sub>  <p>");
		  }
	  }
	  
	  public static boolean isInteger(double d) {
		  return d == (int) d;
		}
	  /** Return the numerator **/
	  public final double numerator() { return numerator_; }

	  /** Return the denominator **/
	  public final double denominator() { return denominator_; }

	  /** Create a Fraction equal in value to num / den **/
	  public Fraction(double num, double den) {
	    // normalize while constructing
	    boolean numNonnegative = (num >= 0);
	    boolean denNonnegative = (den >= 0);
	    double a = numNonnegative? num : -num;
	    double b = denNonnegative? den : -den;
	    double g = gcd(a, b);
	    numerator_ = (numNonnegative == denNonnegative)? (a / g) : (-a / g);
	    denominator_ = b / g;
	  }

	  /** Create a fraction with the same value as Fraction f **/
	  public Fraction(Fraction f) {
	    numerator_ = f.numerator();
	    denominator_ = f.denominator();
	  }

	  public Object clone() { return new Fraction(this); }

	  /** Return the value of the Fraction as a double **/
	  public double asDouble() { 
	    return ((double)(numerator())) / ((double)(denominator()));
	  }

	  /** 
	   * Compute the nonnegative greatest common divisor of a and b.
	   * (This is needed for normalizing Fractions, but can be
	   * useful on its own.)
	   **/
	  public static double gcd(double a, double b) { 
		 double x;
		 double y;

	    if (a < 0) a = -a;
	    if (b < 0) b = -b;

	    if (a >= b) { x = a; y = b; }
	    else        { x = b; y = a; }

	    while (y != 0) {
	    	double t = x % y;
	      x = y;
	      y = t;
	    }
	    return x;
	  }
	}
