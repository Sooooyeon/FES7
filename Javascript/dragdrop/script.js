const dropTarget = document.querySelector('.dropTarget');
const dragItems = document.querySelectorAll('.dragItem');

dragItems.forEach((item) => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => {
            item.classList.add('dragging')
        }, 0)

    })
    item.addEventListener('dragend', () => item.classList.remove('dragging'))
})

function handleDragOver(e) {
    e.preventDefault();
    const draggingItem = dropTarget.querySelector('.dragging');
    const notDraggingItems = Array.from(dropTarget.querySelectorAll('.dragItem:not(.dragging)'));

    const nextItem = notDraggingItems.find((item) => {
        // clientY : 뷰포트 내 마우스 y좌표
        // offsetTop : 뷰포트에서 요소까지의 y좌표

        return e.clientY <= item.offsetTop + item.offsetHeight / 2


        console.log('clientY: ', e.clientY)
        console.log('offsetTop: ', item.offsetTop)
        console.log('offsetHeight', item.offsetHeight)
    })

    dropTarget.insertBefore(draggingItem, nextItem)
}



dropTarget.addEventListener('dragover', handleDragOver)
// dropTarget.addEventListener('dragenter')