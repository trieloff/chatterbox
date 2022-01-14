import { TemplateView } from "hydrogen-view-sdk";
import { Builder } from "hydrogen-view-sdk/types/platform/web/ui/general/TemplateView";
import { AccountSetupViewModel } from "../../viewmodels/AccountSetupViewModel";

export class AccountSetupView extends TemplateView<AccountSetupViewModel> {
    render(t: Builder<AccountSetupViewModel>, vm: AccountSetupViewModel) {
        return t.div(t.mapView(vm => vm.privacyPolicyLink, link => link ? new PolicyAgreementView(vm) : null));
    }
}

class PolicyAgreementView extends TemplateView<AccountSetupViewModel> {
    render(t: Builder<AccountSetupViewModel>, vm: AccountSetupViewModel) {
        return t.div({ className: "PolicyAgreementView" }, [
            t.div({ className: "PolicyAgreementView-text"},
                [
                "By continuing you agree to the ",
                t.a({ href: vm.privacyPolicyLink }, "Privacy Policy"),
            ]),
            t.div(
                { className: "PolicyAgreementView-btn-collection" },
                [
                t.button( { onClick: () => vm.dismiss(), className: "button-action secondary PolicyAgreementView-cancel", }, "Cancel"),
                t.button( { onClick: () => vm.completeRegistration(), className: "PolicyAgreementView-next button-action primary", }, "Next")
                ]),
        ]);
    }
}
