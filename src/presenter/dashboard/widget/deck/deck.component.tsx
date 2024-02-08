import React, {ReactNode} from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackBottomTabParamList} from '../../../../util/IRootParamsNavigation';
import {AppDataContext} from '../../../../../App';
import {Layout} from '@ui-kitten/components';

interface DeckProps
  extends BottomTabScreenProps<RootStackBottomTabParamList, 'deck'> {}

interface State {
  appData: undefined | null;
}

class Deck extends React.Component<DeckProps> {
  unsubscribe: any;

  constructor(props: DeckProps) {
    super(props);

    this.state = {
      appData: null,
    };

    this.unsubscribe = () => {};
  }

  componentDidMount(): void {
    this.unsubscribe = AppDataContext.Consumer(appData => {
      this.setState({appData: {...appData}});
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  render(): ReactNode {
    return (
      <Layout>
        <></>
      </Layout>
    );
  }
}
