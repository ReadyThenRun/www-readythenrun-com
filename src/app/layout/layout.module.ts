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
import { CarouselComponent } from './layout-home/carousel/carousel.component';
import { BlogContainerComponent } from './layout-home/blog-container/blog-container.component';
import { WidgetComponent } from './layout-home/widget/widget.component';




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
    CarouselComponent,
    BlogContainerComponent,
    WidgetComponent
  ],
  imports: [
    CommonModule
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
