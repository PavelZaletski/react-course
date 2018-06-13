// flow-typed signature: 27e6536af37f18fc3e94767dfedd2703
// flow-typed version: cf33ff8762/react-redux_v5.x.x/flow_>=v0.63.0

import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  import type { ComponentType, ElementConfig } from 'react';

  declare export class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare export function createProvider(
    storeKey?: string,
    subKey?: string
  ): Provider<*, *>;

  /*

  S = State
  A = Action
  OP = OwnProps
  SP = StateProps
  DP = DispatchProps
  MP = Merge props
  MDP = Map dispatch to props object
  RSP = Returned state props
  RDP = Returned dispatch props
  RMP = Returned merge props
  CP = Props for returned component
  Com = React Component
  */

  declare type MapStateToProps<S: Object, SP: Object, RSP: Object> = (state: S, props: SP) => RSP;

  declare type MapDispatchToProps<A, OP: Object, RDP: Object> = (dispatch: Dispatch<A>, ownProps: OP) => RDP;

  declare type MergeProps<SP: Object, DP: Object, MP: Object, RMP: Object> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: MP
  ) => RMP;

  declare type ConnectOptions<S: Object, OP: Object, RSP: Object, RMP: Object> = {|
    pure?: boolean,
    withRef?: boolean,
    areStatesEqual?: (next: S, prev: S) => boolean,
    areOwnPropsEqual?: (next: OP, prev: OP) => boolean,
    areStatePropsEqual?: (next: RSP, prev: RSP) => boolean,
    areMergedPropsEqual?: (next: RMP, prev: RMP) => boolean,
    storeKey?: string
  |};

  declare type OmitDispatch<Component> = $Diff<Component, {dispatch: Dispatch<*>}>;

  declare export function connect<
    Com: ComponentType<*>,
    S: Object,
    DP: Object,
    RSP: Object,
    CP: $Diff<OmitDispatch<ElementConfig<Com>>, RSP>
    >(
    mapStateToProps: MapStateToProps<S, DP, RSP>,
    mapDispatchToProps?: null
  ): (component: Com) => ComponentType<CP & DP>;

  declare export function connect<
    Com: ComponentType<*>,
    A,
    S: Object,
    DP: Object,
    SP: Object,
    RSP: Object,
    RDP: Object,
    CP: $Diff<$Diff<ElementConfig<Com>, RSP>, RDP>
    >(
    mapStateToProps: MapStateToProps<S, SP, RSP>,
    mapDispatchToProps: MapDispatchToProps<A, DP, RDP>
  ): (component: Com) => ComponentType<CP & SP & DP>;

  declare export default {
    Provider: typeof Provider,
    createProvider: typeof createProvider,
    connect: typeof connect,
  };
}
