<div class="manifest-object" style="margin-bottom: 0; font-size: 110%;"><a href="#manifeststore">ManifestStore</a></div>

<div style="position: relative;" markdown="1" >
{% include property.html type="scalar" name="active_manifest" desc="<i>UUID</i>" x="65" y="25" %}
{% include property.html type="scalar" name="manifests" desc="NA" x="65" y="65" %}

{% include property.html type="object" name="<i>UUID</i>:" obj="Manifest" x="145" y="125" %}
{% include property.html type="object" name="<i>UUID</i>:" obj="Manifest" x="145" y="165" %}
{% include property.html type="scalar" name="..." desc="NA" x="145" y="200" %}
{% include property.html type="object_array" name="validation_status" obj="ValidationStatus" x="65" y="245" %}

<svg height="300" width="300" style="margin-top: 0;">
  {% include vert-line.html x="20" y-start="0" y-finish="260" %} 
  {% include horiz-line.html y="40" x-start="20" x-finish="60" %} 
  {% include horiz-line.html y="80" x-start="20" x-finish="60" %} 
  {% include horiz-line.html y="260" x-start="20" x-finish="60" %} 

  {% include horiz-line.html y="40" x-start="20" x-finish="60" %} 
  {% include horiz-line.html y="40" x-start="20" x-finish="60" %} 

  {% include vert-line.html x="100" y-start="100" y-finish="220" %} <!-- small vertical -->

  {% include horiz-line.html y="140" x-start="100" x-finish="140" %} 
  {% include horiz-line.html y="180" x-start="100" x-finish="140" %} 
  {% include horiz-line.html y="220" x-start="100" x-finish="140" %} 
</svg>
</div>

<div class="manifest-object" style="margin-bottom: 0; font-size: 110%;"><a href="#manifest">Manifest</a></div>

<div style="position: relative;" markdown="1" >
{% include property.html type="scalar" name="title"  x="65" y="20" %}
{% include property.html type="scalar" name="label" x="65" y="60" %}
{% include property.html type="scalar" name="format"  x="65" y="100" %}
{% include property.html type="scalar" name="credentials"  x="65" y="140" %}
{% include property.html type="scalar" name="instance_id" x="65" y="180" %}
{% include property.html type="scalar" name="redactions"  x="65" y="220" %}
{% include property.html type="scalar" name="claim_generator" x="65" y="260" %}

{% include property.html type="object" name="claim_generator_info" obj="ClaimGeneratorInfo" x="65" y="310" %}

{% include property.html type="object" name="thumbnail" obj="ResourceRef" x="65" y="350" %}
{% include property.html type="object_array" name="ingredients" obj="Ingredient" x="65" y="390" %}
{% include property.html type="object_array" name="assertions" obj="ManifestAssertion" x="65" y="430" %}
{% include property.html type="object" name="signature_info" obj="SignatureInfo" x="65" y="470" %}

<svg height="500" width="300" style="margin-top: 0;">
  {% include vert-line.html x="20" y-start="0" y-finish="485" %}
  
  {% include horiz-line.html y="35" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="75" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="115" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="155" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="195" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="235" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="275" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="325" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="370" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="405" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="405" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="445" x-start="20" x-finish="60" %}
  {% include horiz-line.html y="485" x-start="20" x-finish="60" %}
</svg>
</div>




