import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutAndroidComponent } from './layout-android/layout-android.component';
import { LayoutWebappComponent } from './layout-webapp/layout-webapp.component';
import { LayoutMachinelearningComponent } from './layout-machinelearning/layout-machinelearning.component';
import { LayoutComputerversionComponent } from './layout-computerversion/layout-computerversion.component';
import { LayoutResumeComponent } from './layout-resume/layout-resume.component';
import { BlogContainerComponent } from './layout-home/blog-container/blog-container.component';
import { WidgetComponent } from './layout-home/widget/widget.component';
import { BlogCardComponent } from './layout-home/blog-card/blog-card.component';
import { BlogArticleComponent } from './layout-home/blog-article/blog-article.component';
import { BlogNavSidebarComponent } from './layout-home/blog-nav-sidebar/blog-nav-sidebar.component';






@NgModule({
  declarations: [
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutHomeComponent,
    LayoutAndroidComponent,
    LayoutWebappComponent,
    LayoutMachinelearningComponent,
    LayoutComputerversionComponent,
    LayoutResumeComponent,
    BlogContainerComponent,
    WidgetComponent,
    BlogCardComponent,
    BlogArticleComponent,
    BlogNavSidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutHomeComponent
  ]
})
export class LayoutModule {
  constructor() {
  }
}
