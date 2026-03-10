import { companyInfo, whyChooseUsItems, serviceItems, companyTimeline, leaderInfo, partnerInfo } from '../mock/company';

export const companyService = {
  getInfo() {
    return companyInfo;
  },
  getWhyChooseUs() {
    return whyChooseUsItems;
  },
  getServices() {
    return serviceItems;
  },
  getTimeline() {
    return companyTimeline;
  },
  getLeader() {
    return leaderInfo;
  },
  getPartner() {
    return partnerInfo;
  },
};
