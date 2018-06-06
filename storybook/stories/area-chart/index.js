import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Regular from './standard'
import Partial from './partial'
import ShowcaseCard from '../showcase-card'

storiesOf('AreaChart', module)
    .addDecorator(getStory => <ShowcaseCard>{ getStory() }</ShowcaseCard>)
    .add('Standard', () => <Regular/>)
    .add('Partial', () => <Partial/>)
