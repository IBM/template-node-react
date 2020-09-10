import {Container} from 'typescript-ioc';

import {MockFormApi} from './form/displayform.mock.api';
import {FormMock} from './form/displayform.mock';

import {SearchFormMockApi} from './form/searchform.mock.api';
import {SearchFormMock} from './form/searchform.mock';

import {TableListMockApi} from './list/table-list.mock.api';
import {TableListMock} from './list/table-list.mock';
import {LinkedListMockApi} from './list/linkedlist.mock.api';
import {LinkedListMock} from './list/linkedlist.mock';

import {MasterDetailMockApi} from './composite/masterdetails.mock.api';
import {MasterDetailsMock} from './composite/masterdetail.mock';

import {FormApi} from './form/forms.api';
import { ListApi } from './list/list.api';
import { CompositeFormApi } from './composite/compositeform.api';

import {FormService} from './form/forms.service';
import {ListService} from './list/list.service';
import {CompositeFormService} from './composite/compositeform.service';

export * from './form/displayform.mock.api';
export * from './form/displayform.mock';

export * from './form/searchform.mock.api';
export * from './form/searchform.mock';

export * from './list/table-list.mock.api';
export * from './list/table-list.mock';
export * from './list/linkedlist.mock.api';
export * from './list/linkedlist.mock';

export * from './composite/masterdetails.mock.api';
export * from './composite/masterdetail.mock';

export * from './form/forms.api';
export * from './form/forms.service';

export * from './list/list.api';
export * from './list/list.service';

Container.bind(MockFormApi).to(FormMock);
Container.bind(SearchFormMockApi).to(SearchFormMock);
Container.bind(TableListMockApi).to(TableListMock);
Container.bind(LinkedListMockApi).to(LinkedListMock);
Container.bind(MasterDetailMockApi).to(MasterDetailsMock);

Container.bind(FormApi).to(FormService);
Container.bind(ListApi).to(ListService);
Container.bind(CompositeFormApi).to(CompositeFormService);