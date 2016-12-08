$(document).ready(function(){

    // Toggle selected objects on map
    $('#map-change').click(function() {
        $(this).toggleClass('selected');
        $('.map').toggleClass('selected');
    });

    // Fake compare OP profiles in create view

    $('#two').hide();
    $('#three').hide();
    $('.two.addCount').hide();

    $('.one.addCount').click(function() {
        $(this).hide();
        $('#two').show();
        $('.two.addCount').show();
    });

    $('.two.addCount').click(function() {
        $(this).hide();
        $('#three').show();
    });

    $('#two .removeCount').click(function() {
        $('#two').hide();
        $('.two.addCount').hide();
        $('.one.addCount').show();
    });

    $('#three .removeCount').click(function() {
        $('#three').hide();
        $('.two.addCount').show();
    });

    // Collapse master plans on click
    $('.master-plans .title').click(function() {
       $('.master-plans .list-table').slideToggle();
    });
    // Collapse draft plans on click
    $('.draft-plans .title').click(function() {
       $('.draft-plans .list-table').slideToggle();
    });


    // Fake calendar popout
    $('.initial-end-date').click(function(){
        $('#fake-calendar').toggle();
    });

    // Reassign job modal driver change
    $('.driver-select').change(function() {
        $('.cruz-jobs').toggle();
        $('.brady-jobs').toggle();
        $('.save-button').attr('disabled', false);
    });
    $('.order-select').change(function() {
        $('.cruz-jobs').toggle();
        $('.order-change').toggle();
        $('.save-button').attr('disabled', false);
    });

    // Toggle filters on list
    $('.filter-toggle').click(function() {
        $('.filters').slideToggle();
    });
    $('#filter-button').click(function() {
        $(this).hide();
        $('.well').addClass('visible');
        $('.jobs-table .resource').hide();
        $('.jobs-table tr.no-work').show();
    });
    $('#delete-filter').click(function() {
        $('.well').removeClass('visible');
        $('.jobs-table .resource').show();
        $('#filter-button').show();
    });
    $('#unassigned-button').click(function(){
        $('table.assigned').toggle();
        $('table.unassigned').toggle();
    });

    // Toggle summary tabs on daily-plan
    $('.arrivals-tab').click(function() {
        $('.summary-tab').removeClass('active');
        $(this).addClass('active');
        $('.breakdown-metrics .top-section').hide();
        $('#arrivals').show();
    });

    $('.time-tab').click(function() {
        $('.summary-tab').removeClass('active');
        $(this).addClass('active');
        $('.breakdown-metrics .top-section').hide();
        $('#time').show();
    });

    $('.cost-tab').click(function() {
        $('.summary-tab').removeClass('active');
        $(this).addClass('active');
        $('.breakdown-metrics .top-section').hide();
        $('#cost').show();
    });

    //Select orange on map
    $('#select-orange').click(function(){
        $('.map').toggleClass('selected');
        $(this).toggleClass('selected');
    });

    $('.map-filters .jobs').click(function(){
       $('.map').toggleClass('job-off');
    });
    $('.map-filters .labels').click(function(){
       $('.map').toggleClass('label-off');
    });
    $('.map-filters .routes').click(function(){
       $('.map').toggleClass('route-off');
    });
    $('.map-filters .route-area').click(function(){
       $('.map').toggleClass('route-area');
    });
    $('.map-filters .work-area').click(function(){
       $('.map').toggleClass('work-area');
    });
    $('.map-filters .sequence').click(function(){
       $('.map').toggleClass('sequence');
    });
    $('.close-toggle').click(function(){
       $('.map-filters').toggleClass('closed');
       $(this).toggleClass('closed');
    });

});