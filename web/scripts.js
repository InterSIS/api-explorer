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
    };

    return {
        format: format
    };

}());