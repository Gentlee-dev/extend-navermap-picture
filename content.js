// 메시지 리스너
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const isExtend = request.action === 'extend';
    isExtend? enablePlugin() : shrinkPlugin();  
});

// transition 설정 함수
const setTransition = (element) => {
    if (element && !element.style.transition) {
        element.style.transition = 'width 0.3s ease-in-out';
    }
};

const enablePlugin = () => {
    const $entryIframe = document.getElementById('entryIframe');
    if(!$entryIframe) return;
    
    const $sub_panel = document.getElementById('sub_panel');
    const $app_layout = document.getElementById('app-layout');
    const $left_panel = document.getElementById('section_content');

    const appLayoutWidth = $app_layout.offsetWidth;

    if($sub_panel){
        setTransition($sub_panel);
        const leftPanelWidth = $left_panel.offsetWidth;
        const subPanelWidth = appLayoutWidth - leftPanelWidth;
        $sub_panel.style.width = subPanelWidth + 'px';
    }else{
        setTransition($entryIframe);
        $entryIframe.style.width = appLayoutWidth + 'px';
    }
    
}

const shrinkPlugin = () => {
    const $sub_panel = document.getElementById('sub_panel');
    const $entryIframe = document.getElementById('entryIframe');
    
    if($sub_panel){
        setTransition($sub_panel);
        $sub_panel.style.width = '405px';
    }else{
        setTransition($entryIframe);
        $entryIframe.style.width = '100%';
    }
}
