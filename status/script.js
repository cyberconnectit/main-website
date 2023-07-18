// Function to check website status
        function checkWebsite(url, monitorElement) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var status = xhr.status;
                    var statusText = xhr.statusText;
                    var timestamp = new Date().toLocaleTimeString();

                    if (status >= 200 && status < 400) {
                        monitorElement.querySelector('.status').textContent = 'Online';
                        monitorElement.querySelector('.status').style.color = 'green';
                    } else {
                        monitorElement.querySelector('.status').textContent = 'Offline';
                        monitorElement.querySelector('.status').style.color = 'red';
                    }

                    monitorElement.querySelector('.timestamp').textContent = timestamp;
                }
            };
            xhr.send();
        }

        // Check websites periodically
        setInterval(function() {
            checkWebsite('https://cyberconnectit.github.io/main-website/', document.querySelectorAll('.monitor')[0]);
            checkWebsite('https://cyberconnectit.github.io/ccit-admin/', document.querySelectorAll('.monitor')[1]);
            checkWebsite('https://cyberconnectit.github.io/Portal/', document.querySelectorAll('.monitor')[2]);
        }, 1000); // Check every 1 seconds
