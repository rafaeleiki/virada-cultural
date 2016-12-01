var Notification = (function() {


    function $(id) {
        return document.getElementById(id);
    }

    var notification = {
        show: function (message) {
            var oldNotification = document.body.querySelector('.notification');
            if (oldNotification) {
                oldNotification.parentNode.removeChild(oldNotification);
            }
            document.body.appendChild(this.createNotification(message));
        },
        createNotification: function (message) {
            var notificationBlock = document.createElement('div');
            notificationBlock.className = 'notification';
            notificationBlock.innerHTML = message;

            function listener() {
                document.body.removeChild(notificationBlock);
                notificationBlock.removeEventListener('webkitAnimationEnd', this);
                notificationBlock.removeEventListener('click', this);
            }

            notificationBlock.addEventListener('click', listener);
            notificationBlock.addEventListener('webkitAnimationEnd', listener);

            return notificationBlock;
        }
    };

    return notification;
})();