var JSON;

function X(data) {
    //Templates
    var referenceTemplate = $.templates('#tpl-reference'),
        productTemplate = $.templates('#tpl-product'),
        cssTemplate = $.templates('#tpl-css');
    //Tags to insert templating
    var reference = $('#reference'),
        products = $('#carousel-viewport'),
        css = $('#gallery-css');

    data.data.recommendation.forEach(function(item) {
        item.from = item.oldPrice ? "De: <strike>" + item.oldPrice : "";
    });

    reference.html(
        referenceTemplate.render(data.data.reference.item)
    );

    var count = data.data.widget.size;
    percent = 100 / count;

    css.html(
        cssTemplate.render({ 'count': count, 'percent': percent })
    );
    products.html(
        productTemplate.render(data.data.recommendation)
    );
    JSON = data;
};
