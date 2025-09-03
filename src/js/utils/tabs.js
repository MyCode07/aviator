const tabAreas = document.querySelectorAll('[data-tabs-area]');

if (tabAreas.length) {
    tabAreas.forEach(area => {
        const tabs = area.querySelectorAll('[data-tab]');
        const content = area.querySelectorAll('[data-tab-content]');

        tabs.forEach(tab => {
            const id = tab.dataset.tab;

            tab.addEventListener('click', (e) => {
                e.preventDefault();

                tabs.forEach(item => {
                    const currentId = item.dataset.tab;

                    if (currentId == id) {
                        item.classList.add('_active', '_button-red');
                    }
                    else {
                        item.classList.remove('_active', '_button-red');
                    }
                });

                content.forEach(item => {
                    const currentId = item.dataset.tabContent;

                    if (currentId == id) {
                        item.classList.add('_active');
                    }
                    else {
                        item.classList.remove('_active');
                    }
                });
            })
        })
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.closest('.casino-line') && targetEl.tagName =='BUTTON') {
        targetEl.closest('.casino-line').classList.toggle('_active')
    }
})