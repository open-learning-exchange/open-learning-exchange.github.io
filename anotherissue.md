For correctly installing of VirtualBox on Windows 10, except enabling virtual technology in BIOS, several things need to be done as well:

Before installing VirtualBox, enable Hyper-V in Control Panel - Uninstall a program - Turn Windows features on or off. Aftering installing VirtualBox, disable Hyper-V.
On the host operating system, click Start > Run, type gpedit.msc, and click Ok. The Local group Policy Editor opens.
Go to Local Computer Policy > Computer Configuration > Administrative Templates > System > Device Guard > Turn on Virtualization Based Security.
Select Disabled.