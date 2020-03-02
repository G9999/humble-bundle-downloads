function getWaitTimeAccordingToSize(file_size) {
    var file_size_number = parseInt(file_size.split(' ')[0]);
    var file_size_units = file_size.split(' ')[1];
    var wait_time;
    if (file_size_units.trim() == 'kB' || file_size_units.trim() == 'bytes') {
        wait_time = 10000;
    } else {
        if (file_size_units.trim() == 'GB') {
            file_size_number = file_size_number * 1024;
        }
        // wait a base of 10 seconds. THen add another15 seconds per 25 MB.
        // TODO: customize these parameters using profiles/bandwith
        wait_time = 10000 + (15000 * (parseInt(file_size_number/25)));
    }
    return wait_time;
}

function clickDownload() {
    console.log('Starting...');

    var all_links = document.querySelectorAll('.js-start-download a');
    var valid_links = [];
    var file_sizes = [];
    var wait_times = [];

    all_links.forEach(function(link) {
        if (link.text.trim() == button_type) {
            valid_links.push(link);
        }
    });

    var total_links = valid_links.length;

    console.log('total links: ' + total_links);

    var current_wait_time = 0;

    var wait_time = 0;
    for (var i = 0; i < total_links; i++) {
        
        var parent = valid_links[i].parentElement.parentElement;
        var file_size = parent.querySelector('.mbs').textContent;
        file_sizes.push(file_size);

        current_wait_time = current_wait_time + wait_time;
        wait_times.push(current_wait_time);

        (function(i){
            setTimeout(function(){
                valid_links[i].click();
                download_buttons = document.querySelectorAll('.buttonHolder a');
                download_buttons.forEach(function(download_button) {
                    if (download_button.text.trim() == 'Download anyway') {
                        download_button.click();
                    } else if (download_button.text.trim() == 'Cancel') {
                        download_button.click();
                    }
                });
                var wait_time_until_next_click = getWaitTimeAccordingToSize(file_sizes[i]);
                if (i < total_links - 1) {
                    console.log('Done ' + (i+1) + ' of ' + total_links + '. Size: ' + file_sizes[i] + '. Waiting until next one: ' + (wait_time_until_next_click/1000) + ' seconds.');    
                } else {
                    console.log('Done ' + (i+1) + ' of ' + total_links + '. Size: ' + file_sizes[i] + '. Finished.');
                }
                
            }, wait_times[i]);
        })(i);

        // adjust the wait time before clicking the next file according to the last file size
        var wait_time = getWaitTimeAccordingToSize(file_sizes[i]);
    }
}

clickDownload();
