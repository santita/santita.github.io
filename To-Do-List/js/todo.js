document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa");
    var counter = 0;
    var counting = function () {
        var count = document.querySelector('#counter');
        if (counter < 0) {
            counter = 0;
        };
        count.innerHTML = counter;
    };
    document.getElementById('add').addEventListener('click', function () {
        var value = document.getElementById('item').value;
        var input = document.getElementById('item');
        var list = document.getElementById('todo');
        if (value) {
            counter++;
            var item = document.createElement('li');
            item.innerHTML = value;
            var buttons = document.createElement('div');
            buttons.classList.add('buttons');
            var remove = document.createElement('button');
            remove.classList.add('remove');
            remove.innerHTML = "<i class='fa fa-trash'></i>";
            var complete = document.createElement('button');
            complete.classList.add('complete');
            complete.innerHTML = "<i class='fa fa-check'></i>";
            counting();
            buttons.appendChild(remove);
            buttons.appendChild(complete);
            item.appendChild(buttons);

            list.appendChild(item);
            input.value = '';
            remove.addEventListener('click', function () {
                var item = this.parentNode.parentNode;
                var parent = item.parentNode;

                parent.removeChild(item);
                counter--;
                counting();
            });

            complete.addEventListener('click', function () {
                var item = this.parentNode.parentNode;
                var parent = item.parentNode;
                var id = parent.id;


                if (id === 'todo') {
                    document.getElementById('todo').removeChild(item);
                    document.getElementById('completed').appendChild(item);
                    counter--;
                    counting();
                } else {
                    document.getElementById('completed').removeChild(item);
                    document.getElementById('todo').appendChild(item);
                    counter++;
                    counting();

                }
            });
        }
    });


});
