intersis_explorer = (function() {

    var format = function() {
        $("#api_info p:contains('{{see')").each(function(){
            var targetTag, target, list;

            targetTag = $(this).text().replace("{{see #", "").replace("}}", "");
            target = $("#resources_container #resource_" + targetTag);

            list = $('<ul id="resources"></ul>').append(target);
            $(this).replaceWith(
                $('<div class="container" id="resources_container"></div>').append(list)
            );
        });

        $("#api_info p:contains('{{spec')").each(function(){
            var text, tag;

            text = $(this).text().replace("{{spec #", "").replace("}}", "").split(":");

            tag = text.shift();
            text = text.join("");

            $(this).addClass("spec").addClass(tag);
            $(this).text(text);
        });
    };

    return {
        format: format
    };

}());