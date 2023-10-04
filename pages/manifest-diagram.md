
**ManifestStore**
{: style="margin-bottom: 0;"}

<div style="position: relative;" markdown="1" >
{% include prop.html name="<code>active_manifest</code>: <i>UUID</i>" x="65" y="25" %}
{% include prop.html name="<code>manifests</code>" x="65" y="65" %}
{% include prop.html name="<i>UUID</i>:" obj="Manifest" x="145" y="125" %}
{% include prop.html name="<i>UUID</i>:" obj="Manifest" x="145" y="165" %}
{% include prop.html name="..." x="145" y="200" %}
{% include prop.html name="<code>validation_status</code>: Array of " obj="ValidationStatus" x="65" y="245" %}

<svg height="300" width="300" style="margin-top: 0;">
  <polyline points="20,0 20,260 60,260" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- Large "L -->
  
  <polyline points="20,40 60,40" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 1st horiz from large "L" -->

  <polyline points="20,80 60,80" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 2d horiz from large "L" -->


   <polyline points="100,100 100,220 100,220, 140,220" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- Small "L -->

  <polyline points="100,140 140,140" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 1st horiz from small "L" -->

  <polyline points="100,180 140,180" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 2d horiz from small "L" -->
</svg>
</div>

**Manifest**
{: style="margin-bottom: 0;"}

<div style="position: relative;" markdown="1" >
{% include prop.html name="<code>claim_generator</code>" x="65" y="25" %}
{% include prop.html name="<code>title</code>" x="65" y="65" %}
{% include prop.html name="<code>label</code>" x="65" y="105" %}
{% include prop.html name="<code>format</code>" x="65" y="145" %}
{% include prop.html name="<code>instance_id</code>" x="65" y="185" %}
{% include prop.html name="<code>thumbnail:</code>" obj="ResourceRef" x="65" y="225" %}
{% include prop.html name="<code>ingredients</code>: Array of" obj="Ingredient" x="65" y="265" %}
{% include prop.html name="<code>assertions</code>: Array of" obj="ManifestAssertion" x="65" y="305" %}
{% include prop.html name="<code>signature_info</code>" obj="SignatureInfo" x="65" y="345" %}

<svg height="400" width="300" style="margin-top: 0;">
  <polyline points="20,0 20,360 60,360" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- Large "L -->
  
  <polyline points="20,40 60,40" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 1st horiz from large "L" -->

  <polyline points="20,80 60,80" 
  style="fill:none;stroke:black;stroke-width:2" /> <!-- 2d horiz from large "L" -->

  <polyline points="20,120 60,120" 
  style="fill:none;stroke:black;stroke-width:2" />

  <polyline points="20,160 60,160" 
  style="fill:none;stroke:black;stroke-width:2" />

  <polyline points="20,200 60,200" 
  style="fill:none;stroke:black;stroke-width:2" />

  <polyline points="20,240 60,240" 
  style="fill:none;stroke:black;stroke-width:2" />

  <polyline points="20,280 60,280" 
  style="fill:none;stroke:black;stroke-width:2" />

  <polyline points="20,320 60,320" 
  style="fill:none;stroke:black;stroke-width:2" />
</svg>
</div>


