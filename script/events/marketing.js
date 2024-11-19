/**
 Module for triggering marketing messages
 @author mtownsend
 @since Jan 2021
*/

Events.Marketing = [{
  /* Play Penrose! */
  title: _('空洞'),
  isAvailable: () => !$SM.get('marketing.penrose'),
  scenes: {
    'start': {
      text: [
        _('一种奇怪的嗡嗡声、冲击声和撞击声。人们和地方的景象，一台巨大的机器和扭曲的曲线。'),
        _('邀请。加入是如此容易。')
      ],
      notification: _('一种奇怪的嗡嗡声、砰砰声和撞击声。然后就消失了。'),
      blink: true,
      buttons: {
        'give in': {
          text: _('加入'),
          onClick: () => {
            $SM.set('marketing.penrose', true);
          }
        },
        'ignore': {
          text: _('忽略'),
          nextScene: 'end'
        }
      }
    }
  },
  audio: AudioLibrary.EVENT_NOISES_INSIDE
}];
