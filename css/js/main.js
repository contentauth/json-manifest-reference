jQuery(function() {

	var $sidebar = $('#sidebar'),
		$nav = $('.nav'),
		$main = $('.main');

	var found = true;

	//var localStorage.sodsSidebarShow = "true";
	var siteTitle = document.title;
	var $el;

// 	$("section > div.highlighter-rouge:first-of-type").each(function(i) {
	$("section > div.highlighter-rouge").each(function(i) {

		var $this = $(this).before("<ul class=\"languages\"></ul>"),
		$languages = $this.prev(),
		$notFirst = $this.nextUntil(":not(div.highlighter-rouge)"),
		$all = $this.add($notFirst);

		$all.add($languages).wrapAll("<div class=\"code-viewer\"></div>");


		listLanguages($all, $languages);

		$this.css('display', 'block');
		$notFirst.css('display', 'none');

		$languages.find('a').first().addClass('active');

		$languages.find('a').click(function() {
			$all.css('display', 'none');
			$all.eq($(this).parent().index()).css('display', 'block');

			$languages.find('a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

		if ($languages.children().length === 0) {
			$languages.remove();
		}
	});

	function listLanguages($el, $insert) {
		$el.each(function(i) {
			var title = $(this).attr('title');
			if (title) {
				$insert.append("<li><a href=\"#\">" + title + "</a></li>");
			}
		});
	}

	$("#tg-sb-link").click(function() {
		$("#full-sidebar").toggleClass('navToggle');
		$(".main").toggleClass('expand');
		$("#tg-sb-icon").toggleClass('fa-toggle-on');
		$("#tg-sb-icon").toggleClass('fa-toggle-off');
	});

	$("#show_code").click(function(){
			console.log("SHOW code")
	    $("#code_sample").show();
	});

	$("#hide_code").click(function(){
			console.log("HIDE code")
	    $("#code_sample").hide();
	});

// For display in iframe in Confluence wiki use page_url?wiki=1
	var params = new URLSearchParams(location.search);
	if (params.get('wiki') ) {
		console.log('DISPLAY FOR WIKI')
		$("header").hide(); // Hide global header
		$(".next").hide(); // Hide "Next article" box
		$(".topic-title").hide()
		$(".doc-content").css("font-size", "90%");
		//document.getElementById("full-sidebar").style.width = "0";
		document.getElementById("main-div").className = ""; // Remove class="main"
		//$("h1").hide(); // Hide page title
		$("#tg-sb-link").hide(); // Hide nav button
		// Make external links open another window/tab
		//$(document.links).filter(function() { var isRemote = (this.hostname != window.location.hostname); console.log( "HOST = " + this.hostname + " RETURNING " + isRemote); return isRemote }) .attr('target', '_blank');
		$(document.links).attr('target', '_top');
	}

})
