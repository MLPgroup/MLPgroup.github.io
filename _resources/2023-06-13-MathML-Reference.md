---
layout: resource
title: "MathML reference"

description: MathML is a XML-like markup language for mathematical languages. It's typically used to display mathematical expressions on websites though the native tree-like structure makes it very useful for storing and parsing mathematical expressions. 

icon: star-o
people:
  - qing
---

### Part 0. Why there are two kinds of MathML and what is the difference?

*Presentation markup* captures ***notational structure***. It encodes the notational structure of an expression in a sufficiently abstract way to facilitate rendering to various media. Thus, the same presentation markup can be rendered with relative ease on screen in either wide and narrow windows, in ASCII or graphics, in print, or it can be enunciated in a sensible way when spoken. It does this by providing information such as structured grouping of expression parts, classification of symbols, etc.

Presentation markup does *not* directly concern itself with the mathematical structure or meaning of an expression. In many situations, notational structure and mathematical structure are closely related, so a sophisticated processing application may be able to heuristically infer mathematical meaning from notational structure, provided sufficient context is known. However, in practice, the inference of mathematical meaning from mathematical notation must often be left to the reader.

Employing presentation tags alone may limit the ability to re-use a MathML object in another context, especially evaluation by external applications.

*Content markup* captures ***mathematical structure***. It encodes mathematical structure in a sufficiently regular way in order to facilitate the assignment of mathematical meaning to an expression by application programs. Though the details of mapping from mathematical expression structure to mathematical meaning can be extremely complex, in practice, there is wide agreement about the conventional meaning of many basic mathematical constructions. Consequently, much of the meaning of a content expression is easily accessible to a processing application, independently of where or how it is displayed to the reader. In many cases, content markup could be cut from a Web browser and pasted into a mathematical software tool with the confidence that sensible values will be computed.

Since content markup is *not* directly concerned with how an expression is displayed, a renderer must infer how an expression should be presented to a reader. While a sufficiently sophisticated renderer and style sheet mechanism could in principle allow a user to read mathematical documents using personalized notational preferences, in practice, rendering content expressions with notational nuances may still require the intervention of some sort.

Employing content tags alone may limit the ability of the author to precisely control how an expression is rendered.

Both content and presentation tags are necessary in order to provide the full expressive capability one would expect in a mathematical markup language. Often the same mathematical notation is used to represent several completely different concepts. For example, the notation x^i may be intended (in polynomial algebra) as the i-th power of the variable x, or as the i-th component of a vector x (in tensor calculus). In other cases, the same mathematical concept may be displayed in one of the various notations. For instance, the factorial of a number might be expressed with an exclamation mark, a Gamma function, or a Pochhammer symbol.

Thus, the same notation may represent several mathematical ideas, and, conversely, the same mathematical idea often has several notations. In order to provide authors with the ability to precisely control notation while at the same time encoding meanings in a machine-readable way, both content and presentation markup are needed.

**In general, if it is important to control exactly how an expression is rendered, presentation markup will generally be more satisfactory. If it is important that the meaning of an expression can be interpreted dependably and automatically, then content markup will generally be more satisfactory.**

<hr>
<hr>

### Part 1. Presentational-MathML elements

<hr>
#### Top-level element

<details>
<summary> &lt;math&gt; </summary>
    Top-level MathML element used to write a single mathematical formula.

    <details>
    <summary> Attributes </summary>
        <details>
        <summary> <code>display</code>: its default value is <code>inline</code> </summary>
            <ul> 
            <li> <code>display</code> = <code>block</code>: this element will be displayed in its own block outside the current span of text.  </li> 
            <li> <code>display</code> = <code>inline</code>: this element will be displayed inside the current span of text. </li>
            </ul>
        </details>
    </details>

        <details>
    <summary> Example </summary>
    The infinite sum
    <p>
        <math display="block"> 
            <mrow>
            <munderover>
                <mo>∑</mo>
                <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>1</mn>
                </mrow>
                <mrow>
                <mo>+</mo>
                <mn>∞</mn>
                </mrow>
            </munderover>
            <mfrac>
                <mn>1</mn>
                <msup>
                <mi>n</mi>
                <mn>2</mn>
                </msup>
            </mfrac>
            </mrow>
        </math>
        is equal to the real number
        <math display="inline">  
            <mfrac>
            <msup>
                <mi>π</mi>
                <mn>2</mn>
            </msup>
            <mn>6</mn>
            </mfrac>
        </math>
    </p>
    {% highlight html %}
     <p>
        <math display="block"> 
            <mrow>
            <munderover>
                <mo>∑</mo>
                <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>1</mn>
                </mrow>
                <mrow>
                <mo>+</mo>
                <mn>∞</mn>
                </mrow>
            </munderover>
            <mfrac>
                <mn>1</mn>
                <msup>
                <mi>n</mi>
                <mn>2</mn>
                </msup>
            </mfrac>
            </mrow>
        </math>
        is equal to the real number
        <math display="inline">  
            <mfrac>
            <msup>
                <mi>π</mi>
                <mn>2</mn>
            </msup>
            <mn>6</mn>
            </mfrac>
        </math>
    </p>   
    {% endhighlight %}   
    </details>            

</details>



<hr>  
#### Token elements

<details>
<summary> &lt;mi&gt; </summary>
    Indicates that the content should be rendered as an identifier such as function names, variables, or symbolic constants.
    <details>
    <summary> Attributes </summary>
        <ul> 
        <li> <code>mi</code> accepts global attributes.  </li> 
        <li> For <code>mi</code> elements that contain a single character, the default value of the <code>mathvariant</code> attribute is <code>italic</code>. Otherwise, the <code>mathvariant</code> attribute is <code>normal</code>. </li>
        </ul>
    </details>
    <details>
    <summary> Example </summary>
    <math display="block">
        <!-- Multiple characters, default mathvariant is "normal". -->
        <mi>sin</mi>
    </math>

    <math display="block">
        <!-- Single character, default mathvariant is "italic". -->
        <mi>y</mi>
    </math>

    <math display="block">
        <!-- Overriding default mathvariant. -->
        <mi mathvariant="normal">F</mi>
    </math>    
    {% highlight html %}
<math display="block">
    <!-- Multiple characters, default mathvariant is "normal". -->
    <mi>sin</mi>
</math>

<math display="block">
    <!-- Single character, default mathvariant is "italic". -->
    <mi>y</mi>
</math>

<math display="block">
    <!-- Overriding default mathvariant. -->
    <mi mathvariant="normal">F</mi>
</math>
    {% endhighlight %} 
    </details>
</details>

<details>
<summary> &lt;mn&gt; </summary>
    Represents a <b>numeric</b> literal which is normally a sequence of digits with a possible separator (a dot or a comma). It is also allowed to have arbitrary text in it which is actually a numeric quantity
    <details>
    <summary> Attributes </summary>
        <code>mn</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mn>0</mn>
        </math>

        <math display="block">
            <mn>1.337</mn>
        </math>

        <math display="block">
            <mn>twelve</mn>
        </math>

        <math display="block">
            <mn>XVI</mn>
        </math>

        <math display="block">
            <mn>2e10</mn>
        </math>
        {% highlight html %}
<math display="block">
    <mn>0</mn>
</math>

<math display="block">
    <mn>1.337</mn>
</math>

<math display="block">
    <mn>twelve</mn>
</math>

<math display="block">
    <mn>XVI</mn>
</math>

<math display="block">
    <mn>2e10</mn>
</math>
        {% endhighlight %}    
    </details>
</details>

<details>
<summary> &lt;mo&gt; </summary>
    Represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like commas and semicolons, or "absolute value" bars.
    <details>
    <summary> Attributes </summary>
        <code>mo</code>: accepts global attributes.
        <details>
        <summary> <code>accent</code>: A <code>boolean</code> indicating whether the operator should be treated as an accent when used as an <b>under</b> or <b>overscript</b> (i.e. drawn bigger and closer to the base expression). </summary>
            <ul> 
            <li> <code>accent</code> = <code>True</code>: does draw bigger and closer to the base expression.  </li> 
            <li> <code>accent</code> = <code>False</code>: does not draw bigger and closer to the base expression. </li>
            </ul>
        </details>
        <details>
        <summary> <code>fence</code>: A <code>boolean</code> indicating whether the operator is a fence (such as parentheses). </summary>
            <ul> 
            <li> <code>fence</code> = <code>True</code>: the operator is a fence.  </li> 
            <li> <code>fence</code> = <code>False</code>: the operator is not a fence. </li>
            </ul>
        </details>
        <details>
        <summary> <code>separator</code>: A <code>boolean</code> indicating  whether the operator is a separator (such as commas). </summary>
            <ul> 
            <li> <code>separator</code> = <code>True</code>: the operator is a separator.  </li> 
            <li> <code>separator</code> = <code>False</code>: the operator is not a separator. </li>
            </ul>
        </details>
        <details>
        <summary> <code>stretchy</code>: A <code>boolean</code> indicating  whether the operator stretches to the size of the adjacent element. </summary>
            <ul> 
            <li> <code>stretchy</code> = <code>True</code>: stretches to the size of adjacent element.  </li> 
            <li> <code>stretchy</code> = <code>False</code>: does not stretches to the size of adjacent element. </li>
            </ul>
        </details>        
        <details>
        <summary> <code>symmetric</code>: A <code>boolean</code> indicating whether a stretchy operator should be vertically symmetric around the imaginary math axis (centered fraction line). </summary>
            <ul> 
            <li> <code>symmetric</code> = <code>True</code>: a stretchy operator should be vertically symmetric around the imaginary math axis.  </li> 
            <li> <code>symmetric</code> = <code>False</code>: a stretchy operator does not have to be vertically symmetric around the imaginary math axis. </li>
            </ul>
        </details>       
        <details>
        <summary> <code>movablelimits</code>: A <code>boolean</code> indicating whether attached under- and overscripts move to sub- and superscript positions when <code>math-style</code> is set to <code>compact</code>. </summary>
            <ul> 
            <li> <code>movablelimits</code> = <code>True</code>: allow to perform the movement.  </li> 
            <li> <code>movablelimits</code> = <code>False</code>: do not allow to perform the movement. </li>
            </ul>
        </details>          
        <details>
        <summary> <code>lspace</code>: indicates the amount of space before the operator. </summary>
            <ul> 
            <li> <code>lspace</code> = <code>&lt;length&gt;</code>: set the space to a specific thickness given the unit.  </li> 
            <li> <code>lspace</code> = <code>&lt;percentage&gt;</code>: set the space relative to its parent object. </li>
            </ul>
        </details>    
        <details>
        <summary> <code>rspace</code>: indicates the amount of space after the operator. </summary>
            <ul> 
            <li> <code>rspace</code> = <code>&lt;length&gt;</code>: set the space to a specific thickness given the unit.  </li> 
            <li> <code>rspace</code> = <code>&lt;percentage&gt;</code>: set the space relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>maxsize</code>: indicates the maximum size of the operator when it is stretchy. </summary>
            <ul> 
            <li> <code>maxsize</code> = <code>&lt;length&gt;</code>: set the size to a specific thickness given the unit.  </li> 
            <li> <code>maxsize</code> = <code>&lt;percentage&gt;</code>: set the size relative to its parent object. </li>
            </ul>
        </details>  
        <details>
        <summary> <code>minsize</code>: indicates the minimum size of the operator when it is stretchy. </summary>
            <ul> 
            <li> <code>minsize</code> = <code>&lt;length&gt;</code>: set the size to a specific thickness given the unit.  </li> 
            <li> <code>minsize</code> = <code>&lt;percentage&gt;</code>: set the size relative to its parent object. </li>
            </ul>
        </details>                    
    </details>
    <details>
    <summary> Example </summary>
    <math display="block">
        <mrow>
            <mn>5</mn>
            <mo>+</mo>
            <mn>5</mn>
        </mrow>
    </math>

    <math display="block">
        <mrow>
            <mo>[</mo> <!-- default form value: prefix -->
            <mrow>
            <mn>0</mn>
            <mo>;</mo> <!-- default form value: infix -->
            <mn>1</mn>
            </mrow>
            <mo>)</mo> <!-- default form value: postfix -->
        </mrow>
    </math>
    {% highlight html %}
<math display="block">
    <mrow>
        <mn>5</mn>
        <mo>+</mo>
        <mn>5</mn>
    </mrow>
</math>

<math display="block">
    <mrow>
        <mo>[</mo> <!-- default form value: prefix -->
        <mrow>
        <mn>0</mn>
        <mo>;</mo> <!-- default form value: infix -->
        <mn>1</mn>
        </mrow>
        <mo>)</mo> <!-- default form value: postfix -->
    </mrow>
</math>
    {% endhighlight %}    
    </details>
</details>

<details>
<summary> &lt;ms&gt; </summary>
    Represents a string literal meant to be interpreted by programming languages and computer algebra systems.
    <details>
    <summary> Attributes </summary>
        <code>ms</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
    <math display="block">
        <ms>Hello World!</ms>
    </math>
    {% highlight html %}
<math display="block">
    <ms>Hello World!</ms>
</math>
    {% endhighlight %}    
    </details>
</details>

<details>
<summary> &lt;mspace&gt; </summary>
    Used to display a blank space, whose size is set by its attributes.
    <details>
    <summary> Attributes </summary>
        <details>
        <summary> <code>depth</code>: desired depth (below the baseline) of the space. </summary>
            <ul> 
            <li> <code>depth</code> = <code>&lt;length&gt;</code>: set the depth to a specific thickness given the unit.  </li> 
            <li> <code>depth</code> = <code>&lt;percentage&gt;</code>: set the depth relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>height</code>: desired height (above the baseline) of the space. </summary>
            <ul> 
            <li> <code>height</code> = <code>&lt;length&gt;</code>: set the height to a specific thickness given the unit.  </li> 
            <li> <code>height</code> = <code>&lt;percentage&gt;</code>: set the height relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>width</code>: desired width of the space. </summary>
            <ul> 
            <li> <code>width</code> = <code>&lt;length&gt;</code>: set the width to a specific thickness given the unit.  </li> 
            <li> <code>width</code> = <code>&lt;percentage&gt;</code>: set the width relative to its parent object. </li>
            </ul>
        </details>        
    </details>
    <details>
    <summary> Example </summary>
    <math display="block">
        <mn>1</mn>
        <mspace depth="40px" height="20px" width="100px"
                style="background: lightblue;"/>
        <mn>2</mn>
    </math>
    {% highlight html %}
<math display="block">
    <mn>1</mn>
    <mspace depth="40px" height="20px" width="100px"
            style="background: lightblue;"/>
    <mn>2</mn>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mtext&gt; </summary>
    Used to render arbitrary text with no notational meaning, such as comments or annotations.
    <details>
    <summary> Attributes </summary>
        <code>mtext</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
    <math display="block">
        <mtext>Theorem of Pythagoras</mtext>
    </math>

    <math display="block">
        <mtext>/* comment here */</mtext>
    </math>
    {% highlight html %}
<math display="block">
    <mtext>Theorem of Pythagoras</mtext>
</math>

<math display="block">
    <mtext>/* comment here */</mtext>
</math>
    {% endhighlight %}    
    </details>
</details>

<hr>  
#### General Layout

<details>
<summary> &lt;menclose&gt; </summary>
    Renders its content inside an enclosing notation specified by the <code>notation</code> attribute.
    <details>
    <summary> Attributes </summary>
        <code>menclose</code>: accepts global attributes.
        <details>
        <summary> <code>notation</code>: layout element that encompasses expression. Multiple options. </summary>
            <ul> 
            <li> <code>notation</code> = <code>longdiv</code>: enclose in long division symbol.  </li> 
            <li> <code>notation</code> = <code>actuarial</code>: enclose in actuarial symbol. </li>
            <li> <code>notation</code> = <code>box</code>: enclose in an enclosed box. </li>
            <li> <code>notation</code> = <code>roundedbox</code>: enclose in a rounded box. </li>
            <li> <code>notation</code> = <code>circle</code>: enclose in a circle. </li>
            <li> <code>notation</code> = <code>left</code>: line to the left of the content. </li>
            <li> <code>notation</code> = <code>right</code>: line to the right of the content. </li>
            <li> <code>notation</code> = <code>top</code>: line to above content. </li>
            <li> <code>notation</code> = <code>bottom</code>: line to bottom content. </li>
            <li> <code>notation</code> = <code>updiagonalstrike</code>: - strikeout line through contents from lower left to upper right. </li>
            <li> <code>notation</code> = <code>downdiagonalstrike</code>: - strikeout line through contents from upper left to lower right. </li>            
            <li> <code>notation</code> = <code>verticalstrike</code>: - vertical strikeout line through contents. </li>
            <li> <code>notation</code> = <code>horizontalstrike</code>: - horizontal strikeout line through contents. </li>              
            <li> <code>notation</code> = <code>madruwb</code>: - <a href="https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra">Arabic factorial symbol</a>. </li>
            <li> <code>notation</code> = <code>phasorangle</code>: - phasor angle. </li>
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <menclose notation="horizontalstrike box">
                <mi>x</mi>
                <mo>+</mo>
                <mi>y</mi>
            </menclose>
        </math>
    {% highlight html %}
<math display="block">
    <menclose notation="horizontalstrike box">
        <mi>x</mi>
        <mo>+</mo>
        <mi>y</mi>
    </menclose>
</math>
    {% endhighlight %}    
    </details>
</details>

<details>
<summary> &lt;merror&gt; </summary>
    Used to display contents as error messages. The intent of this element is to provide a standard way for programs that generate MathML from other inputs to report syntax errors.
    <details>
    <summary> Attributes </summary>
        <code>merror</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mfrac>
                <merror>
                <mtext>Syntax error: \frac{1}</mtext>
                </merror>
                <mn>3</mn>
            </mfrac>
        </math>
    {% highlight html %}
<math display="block">
    <mfrac>
        <merror>
        <mtext>Syntax error: \frac{1}</mtext>
        </merror>
        <mn>3</mn>
    </mfrac>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mfrac&gt; </summary>
    Used to display fractions and fraction-like objects such as <a href="https://en.wikipedia.org/wiki/Binomial_coefficient">binomial coefficients</a> and <a href="https://en.wikipedia.org/wiki/Legendre_symbol">Legendre symbols</a>.
    <details>
    <summary> Attributes </summary>
        <code>mfrac</code>: accepts global attributes.
        <details>
        <summary> <code>denomalign</code>: The alignment of the denominator under the fraction (not standard, only accepted by Safari). </summary>
            <ul> 
            <li> <code>denomalign</code> = <code>center</code>: (default) place the denominator on center.  </li> 
            <li> <code>denomalign</code> = <code>left</code>: place the denominator on left. </li>
            <li> <code>denomalign</code> = <code>right</code>: place the denominator on right. </li>
            </ul>
        </details>
        <details>
        <summary> <code>numalign</code>: The alignment of the numerator under the fraction (not standard, only accepted by Safari). </summary>
            <ul> 
            <li> <code>numalign</code> = <code>center</code>: (default) place the numerator on center.  </li> 
            <li> <code>numalign</code> = <code>left</code>: place the numerator on left. </li>
            <li> <code>numalign</code> = <code>right</code>: place the numerator on right. </li>
            </ul>
        </details>        
        <details>
        <summary> <code>linethickness</code>: indicates the thickness of the horizontal fraction line. </summary>
            <ul> 
            <li> <code>linethickness</code> = <code>&lt;length&gt;</code>: set the line to a specific thickness given the unit.  </li> 
            <li> <code>linethickness</code> = <code>&lt;percentage&gt;</code>: set the line to a size relative to its parent. </li>
            </ul>
        </details>  
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mfrac>
                <mrow>
                <mi>a</mi>
                <mo>+</mo>
                <mn>2</mn>
                </mrow>
                <mrow>
                <mn>3</mn>
                <mo>−</mo>
                <mi>b</mi>
                </mrow>
            </mfrac>
        </math>
    {% highlight html %}
<math display="block">
    <mfrac>
        <mrow>
        <mi>a</mi>
        <mo>+</mo>
        <mn>2</mn>
        </mrow>
        <mrow>
        <mn>3</mn>
        <mo>−</mo>
        <mi>b</mi>
        </mrow>
    </mfrac>
</math>
    {% endhighlight %}

        <math display="block">
            <mrow>
                <mo>(</mo>
                <mfrac linethickness="0">
                <mi>n</mi>
                <mi>k</mi>
                </mfrac>
                <mo>)</mo>
            </mrow>
        </math>
    {% highlight html %}
<math display="block">
    <mrow>
        <mo>(</mo>
        <mfrac linethickness="0">
        <mi>n</mi>
        <mi>k</mi>
        </mfrac>
        <mo>)</mo>
    </mrow>
</math>
    {% endhighlight %}       
    </details>
</details>

<details>
<summary> &lt;mpadded&gt; </summary>
    Used to add extra padding and to set the general adjustment of position and size of enclosed contents.
    <details>
    <summary> Attributes </summary>
        <code>mpadded</code>: accepts global attributes.
        <details>
        <summary> <code>depth</code>: desired depth (below the baseline) of the <code>mpadded</code> element. </summary>
            <ul> 
            <li> <code>depth</code> = <code>&lt;length&gt;</code>: set the depth to a specific thickness given the unit.  </li> 
            <li> <code>depth</code> = <code>&lt;percentage&gt;</code>: set the depth relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>height</code>: desired height (above the baseline) of the <code>mpadded</code> element. </summary>
            <ul> 
            <li> <code>height</code> = <code>&lt;length&gt;</code>: set the height to a specific thickness given the unit.  </li> 
            <li> <code>height</code> = <code>&lt;percentage&gt;</code>: set the height relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>width</code>: desired width of the <code>mpadded</code> element. </summary>
            <ul> 
            <li> <code>width</code> = <code>&lt;length&gt;</code>: set the width to a specific thickness given the unit.  </li> 
            <li> <code>width</code> = <code>&lt;percentage&gt;</code>: set the width relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>lspace</code>: indicating the horizontal location of the positioning point of the child content with respect to the positioning point of the <code>mpadded</code> element. </summary>
            <ul> 
            <li> <code>lspace</code> = <code>&lt;length&gt;</code>: set the horizontal line to a specific thickness given the unit.  </li> 
            <li> <code>lspace</code> = <code>&lt;percentage&gt;</code>: set the horizontal line relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>voffset</code>: indicating the vertical location of the positioning point of the child content with respect to the positioning point of the <code>mpadded</code> element. </summary>
            <ul> 
            <li> <code>voffset</code> = <code>&lt;length&gt;</code>: set the vertical line to a specific thickness given the unit.  </li> 
            <li> <code>voffset</code> = <code>&lt;percentage&gt;</code>: set the vertical line relative to its parent object. </li>
            </ul>
        </details>          
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mpadded width="400px" height="5em" depth="4em"
                    lspace="300px" voffset="-2em"
                    style="background: lightblue">
                <mi>x</mi>
                <mo>+</mo>
                <mi>y</mi>
            </mpadded>
        </math>
    {% highlight html %}
<math display="block">
    <mpadded width="400px" height="5em" depth="4em"
            lspace="300px" voffset="-2em"
            style="background: lightblue">
        <mi>x</mi>
        <mo>+</mo>
        <mi>y</mi>
    </mpadded>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mphamtom&gt; </summary>
    Renders the element invisibly, but dimensions (such as height, width, and baseline position) are still kept.
    <details>
    <summary> Attributes </summary>
        <code>mphamtom</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mphantom>
                <mi>y</mi>
                <mo>+</mo>
                </mphantom>
                <mi>z</mi>
            </mrow>
        </math>
    {% highlight html %}
<math display="block">
    <mrow>
        <mi>x</mi>
        <mo>+</mo>
        <mphantom>
        <mi>y</mi>
        <mo>+</mo>
        </mphantom>
        <mi>z</mi>
    </mrow>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mroot&gt; </summary>
    Used to display roots with an explicit index. Two arguments are accepted, the first element is the base, and the second element is the index.
    <details>
    <summary> Attributes </summary>
        <code>mroot</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mroot>
                <mi>x</mi>
                <mn>3</mn>
            </mroot>
        </math>
    {% highlight html %}
<math display="block">
    <mroot>
        <mi>x</mi>
        <mn>3</mn>
    </mroot>
</math>
    {% endhighlight %}    
    </details>
</details>

<details>
<summary> &lt;mrow&gt; <code>important</code> </summary>
    Used to group sub-expressions, which usually contain one or more operators with their respective operands (such as &lt;mi&gt; and &lt;mn&gt;).
    <details>
    <summary> Attributes </summary>
        <code>mrow</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mfrac>
                <mrow>
                    <!-- numerator content grouped in one mrow -->
                    <mn>1</mn>
                    <mo>+</mo>
                    <mi>K</mi>
                </mrow>
                <mrow>
                    <!-- denominator content grouped in one mrow -->
                    <mn>3</mn>
                    <mrow>
                        <!-- fenced expression grouped in one mrow -->
                        <mo>(</mo>
                        <mrow>
                        <!-- fenced content grouped in one mrow -->
                        <mi>x</mi>
                        <mo>+</mo>
                        <mi>y</mi>
                        </mrow>
                        <mo>)</mo>
                    </mrow>
                </mrow>
            </mfrac>
        </math>
    {% highlight html %}
<math display="block">
    <mfrac>
        <mrow>
            <!-- numerator content grouped in one mrow -->
            <mn>1</mn>
            <mo>+</mo>
            <mi>K</mi>
        </mrow>
        <mrow>
            <!-- denominator content grouped in one mrow -->
            <mn>3</mn>
            <mrow>
                <!-- fenced expression grouped in one mrow -->
                <mo>(</mo>
                <mrow>
                <!-- fenced content grouped in one mrow -->
                <mi>x</mi>
                <mo>+</mo>
                <mi>y</mi>
                </mrow>
                <mo>)</mo>
            </mrow>
        </mrow>
    </mfrac>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;msqrt&gt; </summary>
    Display square root symbol (no index is displayed).
    <details>
    <summary> Attributes </summary>
        <code>msqrt</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <msqrt>
                <mi>x</mi>
            </msqrt>
        </math>
    {% highlight html %}
<math display="block">
    <msqrt>
        <mi>x</mi>
    </msqrt>
</math>
    {% endhighlight %}    
    </details>
</details>


<hr>
#### Script and limit elements

<details>
<summary> &lt;mmultiscripts&gt; </summary>
    Used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the <code>msubsup</code> element. Scripts can be either prescripts (placed before the expression) or postscripts (placed after it).
    <details>
    <summary> Attributes </summary>
        <code>mmultiscripts</code>: accepts global attributes.
        <details>
        <summary> <code>subscriptshift</code>: indicating the minimum amount to shift the baseline of the subscript down for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>subscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>subscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>
        <details>
        <summary> <code>superscriptshift</code>: indicating the minimum amount to shift the baseline of the superscript up for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>superscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>superscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>        
    </details>
    <details>
    <summary> Example 1 </summary>
    By default, children are sub- and super-scripts tot eh right of the base expression. You can add sub- and super-scripts to the left of the expression using the <code>&lt;mprescripts/&gt;</code> element:
        <math display="block">
            <mmultiscripts subscriptshift="1em" superscriptshift="1.5em">
                <mi>X</mi>      <!-- base expression -->
                <mi>d</mi>      <!-- postsubscript -->
                <mi>c</mi>      <!-- postsuperscript -->
                <mprescripts/>
                <mi>b</mi>      <!-- presubscript -->
                <mi>a</mi>      <!-- presuperscript -->
            </mmultiscripts>
        </math>
    {% highlight html %}
<math display="block">
    <mmultiscripts subscriptshift="1em" superscriptshift="1.5em">
        <mi>X</mi>      <!-- base expression -->
        <mi>d</mi>      <!-- postsubscript -->
        <mi>c</mi>      <!-- postsuperscript -->
        <mprescripts />
        <mi>b</mi>      <!-- presubscript -->
        <mi>a</mi>      <!-- presuperscript -->
    </mmultiscripts>
</math>
    {% endhighlight %}    
    </details>
    <details>
    <summary> Example 2 </summary>
    You can use the <code>&lt;mrow&gt;</code> tag to not include a sub-/super-script (or just use a blank <code>&lt;mi&gt;</code> child, though that may cause problems with certain parsers).  
        <math display="block">
            <mmultiscripts>
                <mi>X</mi>      <!-- base expression -->
                <mi>d</mi>      <!-- postsubscript -->
                <mi></mi>      <!-- postsuperscript -->
                <mprescripts />
                <mi>b</mi>      <!-- presubscript -->
                <mrow></mrow>      <!-- presuperscript -->
            </mmultiscripts>
        </math>
    {% highlight html %}
<math display="block">
    <mmultiscripts>
        <mi>X</mi>      <!-- base expression -->
        <mi>d</mi>      <!-- postsubscript -->
        <mi></mi>      <!-- postsuperscript -->
        <mprescripts />
        <mi>b</mi>      <!-- presubscript -->
        <mrow></mrow>      <!-- presuperscript -->
    </mmultiscripts>
</math>
    {% endhighlight %}    
    </details>
        <details>
    <summary> Example 3 </summary>
    Children alternate between the sub- and super- script  
        <math display="block">
            <mmultiscripts>
                <mi>X</mi>      <!-- base expression -->
                <mi>a</mi>      <!-- postsubscript -->
                <mi>b</mi>      <!-- postsuperscript -->
                <mi>1</mi>      <!-- postsubscript -->
                <mi>2</mi>      <!-- postsuperscript -->
                <mi>I</mi>      <!-- postsubscript -->
                <mprescripts />
                <mi>c</mi>      <!-- presubscript -->
                <mi>d</mi>      <!-- presuperscript -->
                <mi>3</mi>      <!-- presubscript -->
                <mi>4</mi>      <!-- presuperscript -->
                <mi>III</mi>      <!-- postsubscript -->
            </mmultiscripts>
        </math>
    {% highlight html %}
<math display="block">
    <mmultiscripts>
        <mi>X</mi>      <!-- base expression -->
        <mi>a</mi>      <!-- postsubscript -->
        <mi>b</mi>      <!-- postsuperscript -->
        <mi>1</mi>      <!-- postsubscript -->
        <mi>2</mi>      <!-- postsuperscript -->
        <mi>I</mi>      <!-- postsubscript -->
        <mprescripts />
        <mi>c</mi>      <!-- presubscript -->
        <mi>d</mi>      <!-- presuperscript -->
        <mi>3</mi>      <!-- presubscript -->
        <mi>4</mi>      <!-- presuperscript -->
        <mi>III</mi>      <!-- postsubscript -->
    </mmultiscripts>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;msub&gt; </summary>
    Used to attach a subscript to an expression.
    <details>
    <summary> Attributes </summary>
        <code>msub</code>: accepts global attributes.
        <details>
        <summary> <code>subscriptshift</code>: indicating the minimum amount to shift the baseline of the subscript down for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>subscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>subscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <msub>
                <mi>X</mi>
                <mn>1</mn>
            </msub>
        </math>
    {% highlight html %}
<math display="block">
    <msub>
        <mi>X</mi>
        <mn>1</mn>
    </msub>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;msup&gt; </summary>
    Used to attach a superscript to an expression.
    <details>
    <summary> Attributes </summary>
        <code>msup</code>: accepts global attributes.
        <details>
        <summary> <code>superscriptshift</code>: indicating the minimum amount to shift the baseline of the superscript up for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>superscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>superscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>     
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <msup>
                <mi>X</mi>
                <mn>1</mn>
            </msup>
        </math>
    {% highlight html %}
<math display="block">
    <msup>
        <mi>X</mi>
        <mn>1</mn>
    </msup>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;msubsup&gt; </summary>
    Used to attach a superscript to an expression.
    <details>
    <summary> Attributes </summary>
        <code>msubsup</code>: accepts global attributes.
        <details>
        <summary> <code>subscriptshift</code>: indicating the minimum amount to shift the baseline of the subscript down for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>subscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>subscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>
        <details>
        <summary> <code>superscriptshift</code>: indicating the minimum amount to shift the baseline of the superscript up for both pre and post subscripts (not standard). </summary>
            <ul> 
            <li> <code>superscriptshift</code> = <code>&lt;length&gt;</code>: indicate shift by length.  </li> 
            <li> <code>superscriptshift</code> = <code>&lt;percentage&gt;</code>: indicate shift by percentage. </li>
            </ul>
        </details>     
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <msubsup>
                <mi>X</mi>
                <mn>1</mn>
                <mn>2</mn>
            </msubsup>
        </math>
    {% highlight html %}
<math display="block">
    <msubsup>
        <mi>X</mi>
        <mn>1</mn>
        <mn>2</mn>
    </msubsup>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mover&gt; </summary>
    Used to attach an accent or a limit over an expression.
    <details>
    <summary> Attributes </summary>
        <code>mover</code>: accepts global attributes.
        <details>
        <summary> <code>accent</code>: indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression). </summary>
            <ul> 
            <li> <code>accent</code> = <code>True</code>: the overscript should be treated as an accent.  </li> 
            <li> <code>accent</code> = <code>False</code>: the overscript should not be treated as an accent. </li>
            </ul>
        </details>     
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mover accent="true">
                <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mi>y</mi>
                <mo>+</mo>
                <mi>z</mi>
                </mrow>
                <mo>&#x23DE;<!--TOP CURLY BRACKET--></mo>
            </mover>
        </math>
    {% highlight html %}
<math display="block">
    <mover accent="true">
        <mrow>
        <mi>x</mi>
        <mo>+</mo>
        <mi>y</mi>
        <mo>+</mo>
        <mi>z</mi>
        </mrow>
        <mo>&#x23DE;<!--TOP CURLY BRACKET--></mo>
    </mover>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;munder&gt; </summary>
    Used to attach an accent or a limit under an expression.
    <details>
    <summary> Attributes </summary>
        <code>munder</code>: accepts global attributes.
        <details>
        <summary> <code>accentunder</code>: indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression). </summary>
            <ul> 
            <li> <code>accentunder</code> = <code>True</code>: the underscript should be treated as an accent.  </li> 
            <li> <code>accentunder</code> = <code>False</code>: the underscript should not be treated as an accent. </li>
            </ul>
        </details>     
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <munder accentunder="true">
                <mrow>
                <mi>x</mi>
                <mo>+</mo>
                <mi>y</mi>
                <mo>+</mo>
                <mi>z</mi>
                </mrow>
                <mo>&#x23DF;<!--TOP CURLY BRACKET--></mo>
            </munder>
        </math>
    {% highlight html %}
<math display="block">
    <munder accentunder="true">
        <mrow>
        <mi>x</mi>
        <mo>+</mo>
        <mi>y</mi>
        <mo>+</mo>
        <mi>z</mi>
        </mrow>
        <mo>&#x23DF;<!--TOP CURLY BRACKET--></mo>
    </munder>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;munderover&gt; </summary>
    Used to attach an accent or a limit to both under and over an expression.
    <details>
    <summary> Attributes </summary>
        <code>munderover</code>: accepts global attributes.
        <details>
        <summary> <code>accent</code>: indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression). </summary>
            <ul> 
            <li> <code>accent</code> = <code>True</code>: the overscript should be treated as an accent.  </li> 
            <li> <code>accent</code> = <code>False</code>: the overscript should not be treated as an accent. </li>
            </ul>
        </details>  
        <details>
        <summary> <code>accentunder</code>: indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression). </summary>
            <ul> 
            <li> <code>accentunder</code> = <code>True</code>: the underscript should be treated as an accent.  </li> 
            <li> <code>accentunder</code> = <code>False</code>: the underscript should not be treated as an accent. </li>
            </ul>
        </details>     
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <munderover>
                <mo>∑</mo>
                <mrow>
                <mi>n</mi>
                <mo>=</mo>
                <mn>1</mn>
                </mrow>
                <mrow>
                <mo>+</mo>
                <mn>∞</mn>
                </mrow>
            </munderover>
        </math>
    {% highlight html %}
<math display="block">
    <munderover>
        <mo>∑</mo>
        <mrow>
        <mi>n</mi>
        <mo>=</mo>
        <mn>1</mn>
        </mrow>
        <mrow>
        <mo>+</mo>
        <mn>∞</mn>
        </mrow>
    </munderover>
</math>
    {% endhighlight %}    
    </details>
</details>


<hr>
#### Tabular Math  

<details>
<summary> &lt;mtable&gt; </summary>
    Allows the creation of tables or matrices. Its children are <code>&lt;mtr&gt;</code> elements (representing rows), each of them having <code>&lt;mtd&gt;</code> elements as its children (representing cells).
    <details>
    <summary> Attributes </summary>
        <code>mtable</code>: accepts global attributes.
        <details>
        <summary> <code>width</code>: indicating the width of the entire table. </summary>
            <ul> 
            <li> <code>width</code> = <code>&lt;length&gt;</code>: set the width to a specific thickness (must provide unit).  </li> 
            <li> <code>width</code> = <code>&lt;percentage&gt;</code>: set the width to a size relative to its parent object. </li>
            </ul>
        </details>
        <details>
        <summary> <code>align</code>: specify the table's vertical alignment with respect to its environment. </summary>
            <ul> 
            <li> <code>align</code> = <code>axis</code>: (default) the vertical center of the table aligns on the environment's axis (typically the minus sign).  </li> 
            <li> <code>align</code> = <code>baseline</code>: the vertical center of the table aligns with the environment's baseline. </li>
            <li> <code>align</code> = <code>bottom</code>: the bottom of the table aligns with the environment's baseline. </li>
            <li> <code>align</code> = <code>center</code>: same as <code>baseline</code>. 
            <li> <code>align</code> = <code>top</code>: the top of the table aligns on the environment's baseline. </li>
            </li>            
            </ul>
        </details>        
        <details>
        <summary> <code>columnalign</code>: specifies the horizontal alignment of the cells. </summary>
            <ul> 
            <li> <code>columnalign</code> = <code>left</code>: align the column to left.  </li> 
            <li> <code>columnalign</code> = <code>center</code>: center text in column. </li>
            <li> <code>columnalign</code> = <code>right</code>: align the column to right. </li>
            </ul>
        </details>          
        <details>
        <summary> <code>columnspacing</code>: specifies the horizontal alignment of the cells. </summary>
            <ul> 
            <li> <code>columnspacing</code> = <code>&lt;length&gt;</code>: set the spacing to a specific thickness given the unit.  </li> 
            <li> <code>columnspacing</code> = <code>&lt;percentage&gt;</code>: set the spacing to a size relative to its parent object. </li>
            </ul>
        </details> 
        <details>
        <summary> <code>rowalign</code>: specifies the vertical alignment of the cells. </summary>
            <ul> 
            <li> <code>rowalign</code> = <code>baseline</code>: (default) the vertical center of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>axis</code>: the vertical center of the cell aligns on the environment's axis (typically the minus sign). </li>
            <li> <code>rowalign</code> = <code>bottom</code>: the bottom of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>center</code>: same as <code>baseline</code>. </li>
            <li> <code>rowalign</code> = <code>top</code>: the top of the cell aligns on the environment's baseline. </li>
            </ul>
        </details>  
        <details>
        <summary> <code>rowlines</code>: specifies row borders. </summary>
            <ul> 
            <li> <code>rowlines</code> = <code>none</code>: no lines between rows. </li>
            <li> <code>rowlines</code> = <code>solid</code>: solid border.  </li> 
            <li> <code>rowlines</code> = <code>dashed</code>: dashed border. </li>
            </ul>
        </details> 
        <details>
        <summary> <code>rowspacing</code>: specifies space between table rows. </summary>
            <ul> 
            <li> <code>rowspacing</code> = <code>&lt;length&gt;</code>: set the spacing to a specific thickness given the unit.  </li> 
            <li> <code>rowspacing</code> = <code>&lt;percentage&gt;</code>: set the spacing to a size relative to its parent object. </li>
            </ul>
        </details>         
        <details>
        <summary> <code>frame</code>: specifies border around the entire table. </summary>
            <ul> 
            <li> <code>frame</code> = <code>none</code>: no border. </li>
            <li> <code>frame</code> = <code>solid</code>: solid border.  </li> 
            <li> <code>frame</code> = <code>dashed</code>: dashed border. </li>
            </ul>
        </details> 
        <details>
        <summary> <code>framespacing</code>: specifies additional space added between the table and frame. The first value specifies the spacing on the right and left; the second value specifies the spacing above and below. </summary>
            <ul> 
            <li> <code>framespacing</code> = <code>&lt;length&gt;</code>: set the spacing to a specific thickness given the unit.  </li> 
            <li> <code>framespacing</code> = <code>&lt;percentage&gt;</code>: set the spacing to a size relative to its parent object. </li>
            </ul>
        </details>         
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <mi>X</mi>
            <mo>=</mo>
            <mtable frame="solid" rowlines="dashed" align="axis 3" width="100pt" rowspacing="20pt" columnlines="solid" columnalign="left">
                <mtr>
                <mtd><mi>A</mi></mtd>
                <mtd><mi>B</mi></mtd>
                </mtr>
                <mtr>
                <mtd><mi>C</mi></mtd>
                <mtd><mi>D</mi></mtd>
                </mtr>
                <mtr>
                <mtd><mi>E</mi></mtd>
                <mtd><mi>F</mi></mtd>
                </mtr>
            </mtable>
        </math>
    {% highlight html %}
<math display="block">
    <mi>X</mi>
    <mo>=</mo>
    <mtable frame="solid" rowlines="solid" align="axis 3">
        <mtr>
        <mtd><mi>A</mi></mtd>
        <mtd><mi>B</mi></mtd>
        </mtr>
        <mtr>
        <mtd><mi>C</mi></mtd>
        <mtd><mi>D</mi></mtd>
        </mtr>
        <mtr>
        <mtd><mi>E</mi></mtd>
        <mtd><mi>F</mi></mtd>
        </mtr>
    </mtable>
</math>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;mtr&gt; </summary>
    Represents a row in a table or a matrix.
    <details>
    <summary> Attributes </summary>
        <code>mtr</code>: accepts global attributes.
        <details>
        <summary> <code>columnalign</code>: specifies the horizontal alignment of the cells (overrides setting in parent environment). </summary>
            <ul> 
            <li> <code>columnalign</code> = <code>left</code>: align the column to left.  </li> 
            <li> <code>columnalign</code> = <code>center</code>: center text in column. </li>
            <li> <code>columnalign</code> = <code>right</code>: align the column to right. </li>
            </ul>
        </details>  
        <details>
        <summary> <code>rowalign</code>: specifies the vertical alignment of the cells (overrides setting in parent environment). </summary>
            <ul> 
            <li> <code>rowalign</code> = <code>baseline</code>: (default) the vertical center of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>axis</code>: the vertical center of the cell aligns on the environment's axis (typically the minus sign). </li>
            <li> <code>rowalign</code> = <code>bottom</code>: the bottom of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>center</code>: same as <code>baseline</code>. </li>
            <li> <code>rowalign</code> = <code>top</code>: the top of the cell aligns on the environment's baseline. </li>
            </ul>
        </details>  
    </details>
    <details>
    <summary> Example </summary>
    Check example in <code>&lt;mtable&gt;</code>
    </details>
</details>


<details>
<summary> &lt;mtd&gt; </summary>
    Represents a cell in a table or a matrix.
    <details>
    <summary> Attributes </summary>
        <code>mtd</code>: accepts global attributes.
        <details>
        <summary> <code>columnspan</code>: use to setup a multi-column cell. A non-negative integer value that indicates on how many columns does the cell extend. </summary>
            <ul> 
            <li> <code>columnspan</code> = <code>num</code>: indicates the number of columns the cell extends.  </li> 
            </ul>
        </details>
        <details>
        <summary> <code>rowspan</code>: use to setup a multi-row cell. A non-negative integer value that indicates on how many columns does the cell extend. </summary>
            <ul> 
            <li> <code>rowspan</code> = <code>num</code>: indicates the number of rows the cell extends.  </li> 
            </ul>
        </details>
        <details>
        <summary> <code>columnalign</code>: specifies the horizontal alignment of the cells (overrides setting in parent environment). </summary>
            <ul> 
            <li> <code>columnalign</code> = <code>left</code>: align the column to left.  </li> 
            <li> <code>columnalign</code> = <code>center</code>: center text in column. </li>
            <li> <code>columnalign</code> = <code>right</code>: align the column to right. </li>
            </ul>
        </details>  
        <details>
        <summary> <code>rowalign</code>: specifies the vertical alignment of the cells (overrides setting in parent environment). </summary>
            <ul> 
            <li> <code>rowalign</code> = <code>baseline</code>: (default) the vertical center of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>axis</code>: the vertical center of the cell aligns on the environment's axis (typically the minus sign). </li>
            <li> <code>rowalign</code> = <code>bottom</code>: the bottom of the cell aligns with the environment's baseline.  </li> 
            <li> <code>rowalign</code> = <code>center</code>: same as <code>baseline</code>. </li>
            <li> <code>rowalign</code> = <code>top</code>: the top of the cell aligns on the environment's baseline. </li>
            </ul>
        </details>  
    </details>
    <details>
    <summary> Example </summary>
    Check example in <code>&lt;mtable&gt;</code>
    </details>
</details>





<hr>
#### Semantic annotations

<details>
<summary> &lt;semantics&gt; </summary>
    A tag used to define alternate formats of the expression. 
    <ul>
    <li>Must be a first child in the <code>&lt;math&gt;</code> environment and must contain a MathML expression to be annotated.</li>
    <li>By default, only the first child is rendered, which is supposed to be Presentation MathML.</li>
    <li>Subsequent <code>&lt;annotation&gt;</code> or <code>&lt;annotation-xml&gt;</code> elements are reserved for XML formats such as <a href="https://en.wikipedia.org/wiki/OpenMath">OpenMath</a>.</li>
    </ul>
    <details>
    <summary> Attributes </summary>
        <details>
        <summary> <code>encoding</code>: the encoding of the semantic information in the annotation. </summary>
            <ul> 
            <li> <code>encoding</code> = <code>MathML-Content</code>: a dedicated XML dialect to express the meaning of mathematical formulas. Typically used to store data for parsing and analysis.  </li> 
            <li> <code>encoding</code> = <code>MathML-Presentation</code>: the presentation of the formula that most browsers render. Typically this isn't needed since the presentation version is in the <code>semantics</code> environment by default but it is included for certain data processing tasks.  </li>
            <li> <code>encoding</code> = <code>image/png</code>: annotate with a PNG image of the formula. Some browsers may choose to load the image if the equation markup throws an error.  </li>
            <li> <code>encoding</code> = <code>&lt;custom&gt;</code>: can define a custom environment to be used with data processing tasks.  </li>
            </ul>
        </details>
        <details>
        <summary> <code>src</code>: the location of an external source for semantic information. </summary>
            <ul> 
            <li> <code>src</code> = <code>“some/path/formula.png”</code> </li>
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>
        <math display="block">
            <semantics>
                <!-- The first child is the MathML expression rendered by default. -->
                <mrow>
                <msup>
                    <mi>x</mi>
                    <mn>2</mn>
                </msup>
                <mo>+</mo>
                <mi>y</mi>
                </mrow>

                <!-- Annotate with "Content MathML", a dedicated XML dialect to
                    express the meaning of mathematical formulas. -->
                <annotation-xml encoding="MathML-Content">
                <apply>
                    <plus />
                    <apply>
                    <power />
                    <ci>x</ci>
                    <cn type="integer">2</cn>
                    </apply>
                    <ci>y</ci>
                </apply>
                </annotation-xml>

                <!-- Annotate with a PNG image of the formula. -->
                <annotation encoding="image/png" src="some/path/formula.png" />

                <!-- Annotate with LaTeX, a lightweight markup language to write
                    mathematical formulas. -->
                <annotation encoding="application/x-tex"> x^{2} + y </annotation>
            </semantics>
        </math>
    {% highlight html %}
<math display="block">
    <semantics>
        <!-- The first child is the MathML expression rendered by default. -->
        <mrow>
        <msup>
            <mi>x</mi>
            <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mi>y</mi>
        </mrow>

        <!-- Annotate with "Content MathML", a dedicated XML dialect to
            express the meaning of mathematical formulas. -->
        <annotation-xml encoding="MathML-Content">
        <apply>
            <plus />
            <apply>
            <power />
            <ci>x</ci>
            <cn type="integer">2</cn>
            </apply>
            <ci>y</ci>
        </apply>
        </annotation-xml>

        <!-- Annotate with a PNG image of the formula. -->
        <annotation encoding="image/png" src="some/path/formula.png" />

        <!-- Annotate with LaTeX, a lightweight markup language to write
            mathematical formulas. -->
        <annotation encoding="application/x-tex"> x^{2} + y </annotation>
    </semantics>
</math>    
    {% endhighlight %} 
    </details>
</details>





<hr>
<hr>
### Part 2. (Strict) Content-MathML elements
<hr>

Just like HTML at-large, there are many different flavors of content-markup. We'll focus on strict content-MathML typically used by parsers such as [LateXML](https://math.nist.gov/~BMiller/LaTeXML/).

<details>
<summary> &lt;cn&gt; </summary>
    Used to represent integers, real numbers, and double-precision floating point numbers.
    <details>
    <summary> Attributes </summary>
        <code>cn</code>: accepts global attributes.
        <details>
        <summary> <code>type</code>: Defines integer format. </summary>
            <ul> 
            <li> <code>type</code> = <code>integer</code>: an integer is represented by an optional sign followed by a string of one or more decimal "digits".  </li> 
            <li> <code>type</code> = <code>real</code>: a real number is presented in radix notation. </li>
            <li> <code>type</code> = <code>double</code>: used to mark up those double-precision floating point numbers that can be represented in the<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4610935">IEEE 754</a> standard format. </li>
            <li> <code>type</code> = <code>hexdouble</code>: used to directly represent the 64 bits of an IEEE 754 double-precision floating point number as a 16-digit hexadecimal number. </li>            
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>
    {% highlight html %}
    <cn type="hexdouble">7F800000</cn>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;ci&gt; </summary>
    Represent "mathematical variables" which have properties, but no fixed value.
    <details>
    <summary> Attributes </summary>
        <code>ci</code>: accepts global attributes.
        <details>
        <summary> <code>type</code>: Defines integer format. </summary>
            <ul> 
            <li> <code>type</code> = <code>integer</code>: used as the argument of the type symbol to convey the type of an integer.  </li> 
            <li> <code>type</code> = <code>rational</code>: used as the argument of the type symbol to convey the type of a rational number. </li>            
            <li> <code>type</code> = <code>real</code>: a real number is presented in radix notation. </li>
            <li> <code>type</code> = <code>complex</code>: used as the argument of the type symbol to convey the type for a complex number. </li>           
            <li> <code>type</code> = <code>complex-polar</code>: used as the argument of the type symbol to convey the type of a complex number specified in terms of its modulus and argument. </li>           
            <li> <code>type</code> = <code>complex-cartesian</code>: used as the argument of the type symbol to convey the type of a complex number specified in terms of its real and imaginary parts. </li>
            <li> <code>type</code> = <code>constant</code>: used as the argument of the type symbol to convey a type for the common constants, pi ~= 3.1415, e ~= 2.718, i = square root of -1, gamma ~= .5772, NaN, infinity (all in the nums cd), true and false (in the logic cd). Also for MathML variables declared to have type constant, as in "x=2." </li>
            <li> <code>type</code> = <code>function</code>: used as the argument of the type symbol to convey the type for a function name. </li> 
            <li> <code>type</code> = <code>vector</code>: used as the argument of the type symbol to convey the type for a vector. </li>
            <li> <code>type</code> = <code>list</code>: used as the argument of the type symbol to convey the type for a list. </li>
            <li> <code>type</code> = <code>set</code>: used as the argument of the type symbol to convey the type for a set. </li>
            <li> <code>type</code> = <code>matrix</code>: used as the argument of the type symbol to convey the type for a matrix (n tuple of rows, where each row is an m tuple for some m, it should be noted that each row must be the same length). </li>
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>

    {% highlight html %}
<semantics>
    <ci>n</ci>
    <annotation-xml cd="mathmltypes" name="type" encoding="MathML-Content">
        <csymbol cd="mathmltypes">integer_type</csymbol>
    </annotation-xml>
</semantics>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;csymbol&gt; </summary>
    Used to refer to a specific, mathematically-defined concept with an external definition. In the expression "x+y", the plus sign is a symbol since it has a specific, external definition, namely the addition function.
    <details>
    <summary> Attributes </summary>
        <code>csymbol</code>: accepts global attributes.
        <details>
        <summary> <code>cd</code>: directly referring to OpenMath CD(Content Dictionaries), an extensive, open, and active repository of mathematical definitions. </summary>
            <ul> 
            <li> <code>cd</code> = the name of the  <a href="https://openmath.org/cd/">Content Dictionary</a> </li> 
            </ul>
        </details>
        <details>
        <summary> <code>cdgroup</code>: specifies a URL to an OpenMath CD Group file. </summary>
            <ul> 
            <li> <code>cdgroup</code> = URI, the URI is used to look up for the name in the CD Group File. </li> 
            </ul>
        </details>
        <details>
        <summary> <code>definitionURL</code>: reference CDs or any other source of definitions that can be identified by a URL. </summary>
            <ul> 
            <li> <code>definitionURL</code> = URI/URL. </li> 
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>

    {% highlight html %}
<semantics>
    <csymbol>symbolname</csymbol>
    <annotation-xml cd="mathmltypes" name="type" encoding="MathML-Content">
        <ci>T</ci>
    </annotation-xml>
</semantics>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;cs&gt; </summary>
    Encodes "string literals" which may be used in Content MathML expressions.
    <details>
    <summary> Attributes </summary>
        <code>cs</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>

    {% highlight html %}
<set>
    <cs>A</cs><cs>B</cs><cs>  </cs>
</set>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;apply&gt; </summary>
    Used to build an expression tree that represents the application of a function or operator to its arguments. Roughly speaking, this means a piece of mathematics that could be surrounded by parentheses or "logical brackets" without changing its meaning.
    <details>
    <summary> Attributes </summary>
        <code>apply</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
    The expression "(F+G)X" can be ambiguous but with the content markup, the intent is clear: 
    {% highlight html %}
<apply><csymbol cd="arith1">times</csymbol>
    <apply><csymbol cd="arith1">plus</csymbol>
        <ci>F</ci>
        <ci>G</ci>
    </apply>
    <ci>x</ci>
</apply>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;bind&gt; and &lt;bvar&gt; </summary>
    Used to represent bound variables. Informally, they can be thought of as the "dummy variables" in expressions such as integrals, sums, products, and the logical quantifiers "for all" and "there exists". Binding expressions are represented as MathML expression trees using the <code>bind</code> element. Its first child is a MathML expression that represents a binding operator, for example integral operator. This is followed by a non-empty list of <code>bvar</code> elements denoting the bound variables, and then the final child which is a general Content MathML expression, known as the body

    <details>
    <summary> Attributes </summary>
        <code>bind</code>: accepts global attributes.
        <code>bvar</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>

    {% highlight html %}
<bind><csymbol cd="quant1">forall</csymbol>
    <bvar><ci>x</ci></bvar>
    <apply><csymbol cd="relation1">eq</csymbol>
        <apply><csymbol cd="arith1">plus</csymbol><ci>x</ci><ci>y</ci></apply>
        <apply><csymbol cd="arith1">plus</csymbol><ci>y</ci><ci>x</ci></apply>
    </apply>
</bind>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;share&gt; </summary>
    Used to conserve space in the XML encoding, MathML expression trees can make use of structure sharing.
    <details>
    <summary> Attributes </summary>
        <code>share</code>: accepts global attributes.
        <details>
        <summary> <code>href</code>: a URI specifying the <code>id</code> attribute of the root node of the expression tree. </summary>
            <ul> 
            <li> <code>href</code> = URI of the structure.  </li> 
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>
    Original form:
    {% highlight html %}
<apply><ci>f</ci>
    <apply><ci>f</ci>
        <apply><ci>f</ci>
        <ci>a</ci>
        <ci>a</ci>
        </apply>
        <apply><ci>f</ci>
        <ci>a</ci>
        <ci>a</ci>
        </apply>
    </apply>
    <apply><ci>f</ci>
        <apply><ci>f</ci>
        <ci>a</ci>
        <ci>a</ci>
        </apply>
        <apply><ci>f</ci>
        <ci>a</ci>
        <ci>a</ci>
        </apply>
    </apply>
</apply>
    {% endhighlight %}    
    <code>share</code> form:
    {% highlight html %}
<apply><ci>f</ci>
    <apply id="t1"><ci>f</ci>
        <apply id="t11"><ci>f</ci>
        <ci>a</ci>
        <ci>a</ci>
        </apply>
        <share href="#t11"/>
    </apply>
    <share href="#t1"/>
</apply>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;cerror&gt; </summary>
    It has no direct mathematical meaning. Errors occur as the result of some action performed on an expression tree. Errors may occur inside other objects and also inside other errors.
    <details>
    <summary> Attributes </summary>
        <code>cerror</code>: accepts global attributes.
    </details>
    <details>
    <summary> Example </summary>
    Divide by zero error:
    {% highlight html %}
<cerror>
    <csymbol cd="aritherror">DivisionByZero</csymbol>
    <apply><csymbol cd="arith1">divide</csymbol><ci>x</ci><cn>0</cn></apply>
</cerror>
    {% endhighlight %}    
    </details>
</details>


<details>
<summary> &lt;cbytes&gt; </summary>
    Represents a stream of bytes as a sequence of characters in Base64 encoding. It is mainly used for OpenMath compatibility, but may be used, as in OpenMath, to encapsulate output from a system that may be hard to encode in MathML, such as binary data relating to the internal state of a system, or image data.
    <details>
    <summary> Attributes </summary>
        <code>cbytes</code>: accepts global attributes.
    </details>
</details>






<hr><hr>
### References

* [List of global attributes](https://developer.mozilla.org/en-US/docs/Web/MathML/Global_attributes)
* [Mozilla's MathML developer notes](https://developer.mozilla.org/en-US/docs/Web/MathML)
* [W3C MathML notes (lot of good examples)](https://w3c.github.io/mathml-core/)
    * [Chapter 1 -Introduction](https://www.w3.org/TR/MathML/chapter1.html)
    * [Chapter 2 - MathML fundamentals](https://www.w3.org/TR/MathML/chapter2.html)
    * [Chapter 3 - Presentation markup](https://www.w3.org/TR/MathML/chapter3.html)
    * [Chapter 4 - Content markup](https://www.w3.org/TR/MathML/chapter4.html)
    * [Chapter 5 - Mixing Markup Languages for Mathematical Expressions](https://www.w3.org/TR/MathML/chapter5.html)
* [Variable types (OpenMath)](https://openmath.org/cd/mathmltypes)
<hr>

<!-- <details>
<summary> &lt;math&gt; </summary>

    <details>
    <summary> Attributes </summary>
        <code>mtext</code>: accepts global attributes.
        <details>
        <summary> <code>display</code>: its default value is <code>inline</code> </summary>
            <ul> 
            <li> <code>display</code> = <code>block</code>: this element will be displayed in its own block outside the current span of text.  </li> 
            <li> <code>display</code> = <code>inline</code>: this element will be displayed inside the current span of text. </li>
            </ul>
        </details>
    </details>
    <details>
    <summary> Example </summary>

    {% highlight html %}
    puts 'Expanded message'
    {% endhighlight %}    
    </details>
</details> -->
